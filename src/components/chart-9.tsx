import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px'
import { baseEchartOptions } from '../shared/base-echarts-options'

export const Chart9 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [0.12, 0.38, 0.43, 0.25, 0.31, 0.17, 0.26, 0.36]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        Math.random() / 2,
        Math.random() / 2,
        Math.random() / 2,
        Math.random() / 2,
        Math.random() / 2,
        Math.random() / 2,
        Math.random() / 2,
        Math.random() / 2,
      ]
      x(newData)
    }, 2000)
  }, [])
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
        color: '#F7A110',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 18, 28, 38, 48, 58, 68, 78],
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
            data: data,
            symbol: 'circle',
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#F7A110',
                },
                {
                  offset: 1,
                  color: '#1B1D52',
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
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
