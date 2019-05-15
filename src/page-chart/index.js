import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS, observable} from 'mobx'

import {scaleLinear, scaleBand} from 'd3-scale'
import {axisBottom, axisLeft} from 'd3-axis'
import {max} from 'd3-array'
import {select, mouse, event} from 'd3-selection'

import './index.styl'

@inject('Chart')
@observer    
class BarChart extends Component {
  @observable width = 0

  render() {
    return (
      <div className="chart bar" id="bar">
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
    this.width = document.getElementById('bar').offsetWidth - 20
  }

  createBarChart = () => {
    const svg = select('#bar').select('svg')

    const data = toJS(this.props.Chart.LockCount)
    const dataMax = max(data, d => d.lockCount)

    const margin = {left: 40, top: 20, right: 0, bottom: 30}
    const height = svg.attr('height') - 2 
    
    svg.selectAll('g').remove()

    const xScale = scaleBand()
      .domain(data.map(d => d.month))
      .range([margin.left, svg.attr('width') - margin.right])

    const yScale = scaleLinear()
      .domain([0, dataMax]).nice()
      .range([height - margin.bottom, margin.top])
      
    const xAxis = g => g.attr('transform', `translate(0, ${height - margin.bottom})`)
      .attr('class', 'axis axisX')
      .call(axisBottom(xScale).tickSizeOuter(0))

    const yAxis = g => g.attr('transform', `translate(${margin.left}, 0)`)
      .attr('class', 'axis axisY')
      .call(axisLeft(yScale).ticks(5, 's'))

    svg.append('g')
      .call(xAxis)

    svg.append('g')
      .call(yAxis)

    const gChart = svg
      .selectAll('.g-bar')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'g-bar')

    gChart.exit().remove()
      
    gChart.append('rect')
      .attr('x', d => xScale(d.month) + (xScale.bandwidth() * 0.4 / 2))
      .attr('y', d => yScale(d.lockCount))
      .attr('height', d => yScale(0) - yScale(d.lockCount))
      .attr('width', xScale.bandwidth() * 0.6  )
      .attr('fill', '#6997fe')

    gChart.append('text')
      .attr('dy', '0.75em')
      .attr('y', d => yScale(d.lockCount) - 16)
      .attr('x', d => xScale(d.month))
      .attr('text-anchor', 'middle')
      .attr('dx', xScale.bandwidth() / 2)
      .text(d => d.lockCount)  

    gChart.append('rect')
      .attr('class', 'rect-bg')
      .attr('x', d => xScale(d.month))
      .attr('y', 0)
      .attr('height',yScale(0))
      .attr('width', xScale.bandwidth())
      .attr('fill', 'rgba(0, 0, 0, 0.3)')
      .attr('opacity', 0)
      
    gChart.on('mouseover', function(d) {
      select(this).selectAll('.rect-bg').attr('opacity', 0.3)
    })
      .on('mousemove', function(d) {

        const left = event.screenX + document.getElementById('chart-tooltip').offsetWidth + 30 > window.innerWidth ? 
          mouse(this)[0] - document.getElementById('chart-tooltip').offsetWidth : mouse(this)[0] + 30
        select('#chart-tooltip')
          .attr('style', 'left:' + left + 'px; top:' + (event.offsetY - 35) + 'px')
          .html(`<div>${d.month}</div><div class="dot">添加锁：${d.lockCount}</div> `)

      })
      .on('mouseout', function(d) {
        select(this).selectAll('.rect-bg').attr('opacity', 0)
        select('#chart-tooltip').attr('style', 'display: none')
      })

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
export default BarChart