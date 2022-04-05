import React from 'react';
import './home.scss';
import headerBg from '../images/header.png'
console.log(headerBg);

export const Home = () => {
  return (
    <div>
      <div className="x" style={{backgroundImage: 'url(${headerBg})'}}>你好</div>
    </div>
  );
};
