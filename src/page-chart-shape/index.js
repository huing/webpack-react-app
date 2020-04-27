import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {toJS, observable} from 'mobx'
import {scaleOrdinal, pie, arc, select, event} from 'd3'
import store from './store'
import './index.styl'

@observer    
class ShapeChart extends Component {
  @observable width = 0

  render() {
    return (
      <div className="chart shape" id="shape">
        <svg  
          ref={node => this.node = node}
          width={this.width}
          height={410}
          style={{border: '1px solid #cd0000'}}
          viewBox={`0, 0, ${this.width}, 410`}
        >
        </svg>
        <div className="shape-tooltip tooltip" id="shape-tooltip" style={{display: 'none'}}></div>
      </div> 
    )
  }

  updateDimensions = () => {
    this.width = document.getElementById('shape').offsetWidth - 26
  }

  createBarChart = () => {
    const svg = select('#shape').select('svg')

    const data = toJS(store.shapeDataArr)

    const margin = {top: 20, right: 30, bottom: 20, left: 30}
    const width = svg.attr('width') - margin.left - margin.right
    const height = svg.attr('height') - margin.top - margin.bottom
    const radius = Math.min(width, height) / 2
    const color = scaleOrdinal()
      .domain(data.map(d => d.title))
      .range(['#FE9437', '#F36762', '#6997FE'])

    const shapeArc = arc().innerRadius(radius * 0.3).outerRadius(radius * 0.5)
    const outerArc = arc().innerRadius(radius * 0.6).outerRadius(radius * 0.7)

    const shapePie = pie()  // 创建一个饼生成器
      .sort(null) // 设置排序比较器
      .value((d, i) => d.value) // 设置值访问器 d.value = d.key
      .padAngle(0.04) // 相邻的扇形之间的间隔

    svg.selectAll('g').remove()

    svg.append('g')
      .attr('class', 'slices')
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .selectAll('path')
      .data(shapePie(data))
      .enter()
      .append('path')
      .style('fill', (d, i) => {
        return color(d.data.title)
      })
      .attr('d', shapeArc)
      .on('mousemove', function(d) {
        select('#shape-tooltip')
          .attr('style', 'left:' + (event.clientX - 200 - 35) + 'px; top:' + (event.clientY - 35) + 'px')
          .html(`${d.data.title}: (${d.data.value}) ${d.data.pre}`)
      })
      .on('mouseout', function(d){
        select('#shape-tooltip').attr('style', 'display: none')
      })

    svg.append('g')
      .attr('class', 'labels')
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .selectAll('polyline')
      .data(shapePie(data))
      .enter()
      .append('polyline')
      .attr("fill","none")
      .style('stroke', (d, i) => color(d.data.title))
      .attr('points', function(d) {
        const pos = outerArc.centroid(d)
        pos[0] = radius * 0.7 * (midAngle(d) < Math.PI ? 1 : -1)
        return [shapeArc.centroid(d), outerArc.centroid(d), pos]
      })

    svg.append('g')
      .attr('class', 'lines')
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .selectAll('text')
      .data(shapePie(data))
      .enter()
      .append('text')
      .attr('dy', '.35em')
      .html(d => `${d.data.title}: ${d.data.pre}`)
      .attr('transform', function(d) {
        const pos = outerArc.centroid(d)
        pos[0] = radius * 0.8 * (midAngle(d) < Math.PI ? 1 : -1)
        return `translate(${pos})` 
      })
      .style('text-anchor', function(d) {
        return (midAngle(d)) < Math.PI ? 'start' : 'end'
      })

    function midAngle(d) { 
      return d.startAngle + (d.endAngle - d.startAngle) / 2
    }
  
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