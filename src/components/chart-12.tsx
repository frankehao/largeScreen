import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px'
import { baseEchartOptions } from '../shared/base-echarts-options'
export const Chart12 = () => {
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
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'center',
          textStyle: { color: 'white' },
          itemWidth: px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find((i) => i.name === name)?.value + '%'
            return name + ' ' + value
          },
        },
        series: [
          {
            center: ['60%', '50%'],
            type: 'pie',
            radius: '80%',
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
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
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
    </div>
  )
}
