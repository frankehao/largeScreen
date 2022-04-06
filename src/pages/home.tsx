import React,{useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'

const px=(n)=>n/2420*(window as any).pageWidth
console.log(headerBg);

export const Home = () => {
  const divRef = useRef(null)
  useEffect(() => {
    
    // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(divRef.current);

      // 指定图表的配置项和数据
      var option = {
        textStyle: {
          fontSize:px(12)
        },
        xAxis: {
          data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区','兰州新区', '兰州新区', '兰州新区'],
          axisTick: { show: false },
          axisLine: {
            show:true,
            lineStyle: {
              color:'#083b70'
            } ,
          },
          axisLabel: {
            color:'#676974',
            fontSize: px(12),
            formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
          }
        },



        
        grid: {
          x: px(40),
          y: px(40),
          x2:px(40),
          y2:px(40),
        },
        yAxis: {
          splitLine: {
            show:false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color:'#083b70'
            } 
          } ,
          axisLabel: {
            color:'#676974',
            fontSize:px(12)
          }
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [10,20, 36, 41, 15, 26, 37,18,29]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
  },[])
  return (
    <div className='home'>
      <header  style={{backgroundImage: `url(${headerBg})`}}></header>
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">
            </div>
          </div>
        </section>
        <section className="section2 bordered"></section>
        <section className="section3 bordered"></section>
        <section className="section4 bordered"></section>
        <section className="section5 bordered"></section>
      </main>
    </div>
  );
};
