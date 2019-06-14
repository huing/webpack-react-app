import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS, observable, action} from 'mobx'
import {
  max, select, event, mouse,
  scaleOrdinal, scaleBand, scaleLinear,
  axisBottom, axisLeft,
  stack, stackOrderNone, stackOffsetNone,
} from 'd3'

import './index.styl'


@inject('Chart')
@observer    
class ShapeChart extends Component {
  @observable width = 0

  render() {
    return (
      <div className="chart stack" id="stack">
        <svg  
          ref={node => this.node = node}
          width={this.width}
          height={410}
          style={{border: '1px solid #cd0000'}}
          viewBox={`0, 0, ${this.width}, 410`}
        >
        </svg>
        <div className="stack-tooltip tooltip" id="stack-tooltip" style={{display: 'none'}}></div>
      </div> 
    )
  }

  updateDimensions = () => {
    // console.log(document.getElementById('stack').offsetWidth)
    this.width = document.getElementById('stack').offsetWidth - 24
  }

  @action parentData = () => {
    const org = toJS(this.props.Chart.stackData).reduce((acc, cur) => 
      [...acc, ...Object.keys(cur)], [])
      .filter((element, index, array) => 
        element !== 'month' && array.indexOf(element) === index)
    const month = toJS(this.props.Chart.stackData).reduce((acc, cur) => 
      acc.includes(cur.month) ? acc : [...acc, cur.month], [])
    const stackData = toJS(this.props.Chart.stackData).reduce((acc, cur) => {
      let count = 0
      let sortItem = {}
      org.map(item => {
        if (!cur[item]) {
          sortItem[item] = 0
        } else {
          sortItem[item] = cur[item]
          count += cur[item]
        }
        return null
      })
      sortItem['total'] = count
      sortItem['month'] = cur.month
      return [...acc, sortItem]
    }, [])
    return {org, month, stackData}
  }

  createBarChart = () => {
    const svg = select('#stack').select('svg')
    svg.selectAll('g').remove()

    const {org, month, stackData} = this.parentData()

    const series = stack().keys(org).order(stackOrderNone).offset(stackOffsetNone)(stackData)
    const margin = {top: 20, right: 30, bottom: 20, left: 30}
    const width = svg.attr('width') 
    const height = svg.attr('height') 

    const color = scaleOrdinal()
      .domain(series.map(d => d.key))
      .range(['#6997FE', '#FE9437', '#FEC837', '#99CC01', '#F36762', '#808BEF', '#E488FB', '#FD8483'])

    const xScale = scaleBand().domain(month)
      .range([margin.left, width - margin.right])

    const yScale = scaleLinear().domain([0, max(series, d => max(d, d => d[1]))]).nice()
      .range([height - margin.bottom, margin.top])
    
    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .attr('class', 'axis axisX')
      .call(axisBottom(xScale).tickSizeOuter(0))
      // .call(g => g.selectAll(".domain").remove())
    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .attr('class', 'axis axisY')
      .call(axisLeft(yScale).ticks(5, 's'))
      // .call(g => g.selectAll(".domain").remove())
    svg.append('g').selectAll('g').data(series).join('g')
      .attr('fill', d => color(d.key))
      .selectAll('rect')
      .data(d => d)
      .join('rect')
      .attr('x', d => xScale(d.data.month) + (xScale.bandwidth() * 0.2 / 2))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth() * 0.8)
    const barRect = svg.append('g').selectAll('g').data(stackData).enter()
    barRect
      .append('text')
      .attr('dy', '0.75em')
      .attr('y', d => yScale(d.total) - 16)
      .attr('x', d => xScale(d.month))
      .attr('text-anchor', 'middle')
      .attr('dx', xScale.bandwidth() / 2)
      .text(d => d.total) 
      .attr('class', 'text')
    barRect
      .append('rect')
      .attr('class', 'stack-rect-bg')
      .attr('y', 0)
      .attr('x', d => xScale(d.month))
      .attr('height', yScale(0))
      .attr('width', xScale.bandwidth())
      .attr('fill', 'rgba(93, 248, 157, 0)')
      .on('mouseover', function(d) {
        select(this).attr('fill', 'rgba(93, 248, 157, 0.3)')
      })
      .on('mousemove', function(d) {
        const left = event.screenX + document.getElementById('stack-tooltip').offsetWidth + 30 > window.innerWidth ? 
          mouse(this)[0] - document.getElementById('stack-tooltip').offsetWidth : mouse(this)[0] + 30
        select('#stack-tooltip')
          .attr('style', 'left:' + left + 'px; top:' + (event.offsetY + 35) + 'px')
          .html(shows(d))
      })
      .on('mouseout', function(d) {
        select(this).attr('fill', 'rgba(93, 248, 157, 0)')
        select('#stack-tooltip').attr('style', 'display: none')
      })
    function shows(data) {
      let text = ''
      text = `<div>${data.month}</div>`
      Object.keys(data).reverse().map(key => {
        if (key !== 'month' && key !== 'total') {
          text += `<div><div class="dot" style="background-color: ${color(key)}"></div>${key}: ${data[key]}</div>`
        }   
        return null   
      })
      return text
    }

    svg.append('g').call(xAxis)
    svg.append('g').call(yAxis)
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  componentDidUpdate() {
    this.createBarChart()
  }

}
export default ShapeChart