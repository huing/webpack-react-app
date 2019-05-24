import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS, observable} from 'mobx'

import {scaleOrdinal, scaleBand, scaleLinear} from 'd3-scale'
import {axisBottom, axisLeft} from 'd3-axis'

import {max} from 'd3-array'
import {stack, stackOrderNone, stackOffsetNone} from 'd3-shape'
import {select} from 'd3-selection'

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
        <div className="chart-tooltip" id="chart-tooltip" style={{display: 'none'}}></div>
      </div> 
    )
  }

  updateDimensions = () => {
    console.log(document.getElementById('stack').offsetWidth)
    this.width = document.getElementById('stack').offsetWidth - 24
  }

  createBarChart = () => {
    const svg = select('#stack').select('svg')

    svg.selectAll('g').remove()
    const data = toJS(this.props.Chart.stackData)
    // const org = data.reduce((acc, cur) => 
    //   acc.includes(cur.org) ? acc : [...acc, cur.org]
    // , [])
    const org = data.reduce((acc, cur) => 
      [...acc, ...Object.keys(cur)], [])
      .filter((element, index, array) => 
        element !== 'month' && array.indexOf(element) === index)
    const month = data.reduce((acc, cur) => 
      acc.includes(cur.month) ? acc : [...acc, cur.month]
    , [])
    const sd = data.reduce((acc, cur) => {
      let count = 0
      org.map(item => {
        if (!cur[item]) {
          cur[item] = 0
        } else {
          count += cur[item]
        }
        return null
      })
      cur['total'] = count
      return [...acc, cur]
    }, [])

    const margin = {top: 20, right: 30, bottom: 20, left: 30}
    const width = svg.attr('width') 
    const height = svg.attr('height') 

    const series = stack()
      .keys(org)
      .order(stackOrderNone)
      .offset(stackOffsetNone)(sd)

    const color = scaleOrdinal()
      .domain(series.map(d => d.key))
      .range(['#6997FE', '#FE9437', '#FEC837', '#99CC01', '#F36762', '#808BEF', '#E488FB', '#FD8483'])
      // .padding(0.1)

    const xScale = scaleBand()
      .domain(month)
      .range([margin.left, width - margin.right])
      .padding(0.2)
    const yScale = scaleLinear()
      .domain([0, max(series, d => max(d, d => d[1]))]).nice()
      .range([height - margin.bottom, margin.top])
    
    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(axisBottom(xScale).tickSizeOuter(0))
      // .call(g => g.selectAll(".domain").remove())

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(axisLeft(yScale).ticks(5, 's'))
      // .call(g => g.selectAll(".domain").remove())

 
    svg.append('g').selectAll('g').data(series).join('g')
      .attr('fill', d => color(d.key))
      .selectAll('rect')
      .data(d => d)
      .join('rect')
      .attr('x', (d, i) => xScale(d.data.month))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth())

    svg.append('g')
      .data(data)
      .append('text')
      .attr('dy', '0.75em')
      // .attr('y', d => yScale(d.data.month) - 16)
      // .attr('x', d => xScale(d.data.month))
      // .attr('text-anchor', 'middle')
      // .attr('dx', xScale.bandwidth() / 2)
      // .text(d => d.data.total) 

    svg.append('g') 
      .call(xAxis)

    svg.append('g')
      .call(yAxis)

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