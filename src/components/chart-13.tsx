import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { baseEchartOptions } from '../shared/base-echarts-options'
export const Chart13 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    { value: 20, name: '东岗路' },
    { value: 20, name: '段家滩' },
    { value: 20, name: '雁北' },
    { value: 20, name: '五泉山' },
    { value: 20, name: '中山路' },
  ]
  useEffect(() => {
    setInterval(() => {
      var arr = new Array(5).fill(0)
      for (var i = 0; i < 100; i++) {
        var num = Math.trunc(Math.random() * 10)
        arr[~~(num / 2)]++
      }
      const newData = [
        { value: Math.trunc(arr[0]), name: '东岗路' },
        { value: Math.trunc(arr[1]), name: '段家滩' },
        { value: Math.trunc(arr[2]), name: '雁北' },
        { value: Math.trunc(arr[3]), name: '五泉山' },
        { value: Math.trunc(arr[4]), name: '中山路' },
      ]
      x(newData)
    }, 2000)
  }, [])
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: '#083B70' },
          },
          axisLabel: {
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
            formatter(value) {
              return value.toFixed(0) + '%'
            },
          },
        },
        series: [
          {
            type: 'bar',
            data: data.map((i) => i.value),
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#0A97FB',
              },
              {
                offset: 1,
                color: '#1E34FA',
              },
            ]),
          },
        ],
      }),
    )
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    x(data)
  }, [])
  return <div ref={divRef} className="chart"></div>
}
