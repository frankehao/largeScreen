import React, { useEffect, useRef } from 'react'
import './home.scss'
import headerBg from '../images/header.png'
import { Chart1 } from '../components/chart-1'
import { Chart2 } from '../components/chart-2'
import { Chart3 } from '../components/chart-3'
export const Home = () => {
  const year = new Date().getFullYear()
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2 bordered">
          <Chart3 />
        </section>
        <section className="section3 bordered"></section>
        <section className="section4 bordered"></section>
        <section className="section5 bordered"></section>
      </main>
      <footer>&copy;Large screen visualization 2020-{year}</footer>
    </div>
  )
}
