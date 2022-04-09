import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { baseEchartOptions } from '../shared/base-echarts-options'
const px = (n) => (n / 2420) * (window as any).pageWidth
export const Chart1 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    { name: '城关区', date: 10 },
    { name: '七里河区', date: 20 },
    { name: '西固区', date: 36 },
    { name: '安宁区', date: 41 },
    { name: '红古区', date: 15 },
    { name: '永登县', date: 26 },
    { name: '皋兰县', date: 37 },
    { name: '榆中县', date: 18 },
    { name: '新区', date: 29 },
  ]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '城关区', date: Math.random() * 50 },
        { name: '七里河区', date: Math.random() * 50 },
        { name: '西固区', date: Math.random() * 50 },
        { name: '安宁区', date: Math.random() * 50 },
        { name: '红古区', date: Math.random() * 50 },
        { name: '永登县', date: Math.random() * 50 },
        { name: '皋兰县', date: Math.random() * 50 },
        { name: '榆中县', date: Math.random() * 50 },
        { name: '新区', date: Math.random() * 50 },
      ]
      x(newData)
    }, 2000)
  }, [])

  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
        xAxis: {
          data: [
            '城关区',
            '七里河区',
            '西固区',
            '安宁区',
            '红谷区',
            '永登区',
            '皋兰区',
            '榆中区',
            '兰州新区',
          ],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: '#083B70' },
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 2) {
                const array = val.split('')
                array.splice(2, 0, '\n')
                return array.join('')
              } else {
                return val
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#083B70' },
          },
          axisLabel: {
            fontSize: px(12),
          },
        },
        series: [
          {
            type: 'bar',
            data: data.map((i) => i['date']),
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
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
