import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS, observable} from 'mobx'

import {scaleLinear, scaleBand} from 'd3-scale'
import {axisBottom, axisLeft} from 'd3-axis'
import {max} from 'd3-array'
import {select} from 'd3-selection'
// import tip from 'd3-tip'

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
      </div> 
    )
  }

  updateDimensions = () => {
    this.width = document.getElementById('bar').offsetWidth - 20
    console.log('Chart updateDimensions', this.width)
  }

  createBarChart = () => {
    const svg = select(this.node)

    const data = toJS(this.props.Chart.LockCount)
    const dataMax = max(data, d => d.lockCount)

    const margin = {left: 40, top: 20, right: 0, bottom: 30}
    const height = svg.attr('height') - 2 

    const xScale = scaleBand()
      .domain(data.map(d => d.month))
      .range([margin.left, svg.attr('width') - margin.right])
      .padding(0.4)

    const yScale = scaleLinear()
      .domain([0, dataMax]).nice()
      .range([height - margin.bottom, margin.top])
      
    const xAxis = g => g.attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(axisBottom(xScale).tickSizeOuter(0))

    const yAxis = g => g.attr('transform', `translate(${margin.left}, 0)`)
      .call(axisLeft(yScale).ticks(5, 's'))
      // .call(g => select('.domain').remove() ) // x轴横线是否显示

    svg.selectAll('g').remove()

    // const tooltip = tip()
    //   .attr('class', 'd3-tip')
    //   .offset([-10, 0])
    //   .html(d => 
    //     `<strong>添加锁:</strong> <span style='color:red'>${d.month}</span>`
    //   )
    // svg.call(tooltip)

    const gChart = svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar')


    gChart.exit().remove()
      
    gChart.append('rect')
      .attr('class', 'rect-bg')
      .attr('x', d => xScale(d.month))
      .attr('y', 0)
      .attr('height',yScale(0))
      .attr('width', xScale.bandwidth() - 10 )
      .attr("fill", 'red')
      .attr('text-anchor', 'middle')

    gChart.append('rect')
      .attr('x', d => xScale(d.month) + 10)
      .attr('y', d => yScale(d.lockCount))
      .attr('height', d => yScale(0) - yScale(d.lockCount))
      .attr('width', xScale.bandwidth() - 10)
      .attr('fill', '#6997fe')
      // .on('mouseover', tooltip.show)
      // .on('mouseout', tooltip.hide)
    gChart.append('text')
      .attr('dy', '0.75em')
      .attr('y', d => yScale(d.lockCount) - 16)
      .attr('x', d => xScale(d.month))
      .attr('text-anchor', 'middle')
      .attr('dx', xScale.bandwidth()/2)
      .text(d => d.lockCount)

    svg.append('g')
      .call(xAxis)
    svg.append('g')
      .call(yAxis)
    

    // .attr("transform", "rotate(-90)")
    // .attr("y", 6)
    // .attr("dy", ".75em")
    // .style("text-anchor", "end")
    // .text("Frequency")
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)

    // this.createBarChart()
    // console.log('Chart componentDidMount', toJS(this.props.Chart.LockCount))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
    // console.log('Chart componentWillUnmount',this.props, toJS(this.props.Chart.LockCount))
  }

  componentDidUpdate() {
    this.createBarChart()
    console.log('Chart componentDidUpdate',this.props, toJS(this.props.Chart.LockCount))
  }

}
export default BarChart