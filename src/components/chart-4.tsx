import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { baseEchartOptions } from '../shared/base-echarts-options'
import { px } from '../shared/px'

export const Chart4 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    { name: '0', date: 0.15 },
    { name: '2', date: 0.13 },
    { name: '4', date: 0.11 },
    { name: '6', date: 0.13 },
    { name: '8', date: 0.14 },
    { name: '10', date: 0.15 },
    { name: '12', date: 0.16 },
    { name: '14', date: 0.18 },
    { name: '16', date: 0.21 },
    { name: '18', date: 0.19 },
    { name: '20', date: 0.17 },
    { name: '22', date: 0.16 },
    { name: '24', date: 0.15 },
  ]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '0', date: Math.random() * 0.2 },
        { name: '2', date: Math.random() * 0.2 },
        { name: '4', date: Math.random() * 0.2 },
        { name: '6', date: Math.random() * 0.2 },
        { name: '8', date: Math.random() * 0.2 },
        { name: '10', date: Math.random() * 0.2 },
        { name: '12', date: Math.random() * 0.2 },
        { name: '14', date: Math.random() * 0.2 },
        { name: '16', date: Math.random() * 0.2 },
        { name: '18', date: Math.random() * 0.2 },
        { name: '20', date: Math.random() * 0.2 },
        { name: '22', date: Math.random() * 0.2 },
        { name: '24', date: Math.random() * 0.2 },
      ]
      x(newData)
    }, 2000)
  }, [])

  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          splitLine: { show: true, lineStyle: { color: '#073E78' } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { color: '#073E78' } },
          axisLabel: {
            formatter(val) {
              return val * 100 + '%'
            },
          },
        },
        series: [
          {
            type: 'line',
            data: data.map((i) => i['date']),
            symbol: 'circle',
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#414a9f',
                },
                {
                  offset: 1,
                  color: '#1b1d52',
                },
              ]),
            },
          },
        ],
      }),
    )
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    x(data)
  }, [])

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}
