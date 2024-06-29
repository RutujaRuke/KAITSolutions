import React from 'react'
import HomePage1 from '../components/HomePage/HomePage1';
import './Home.css';
import HomePage2 from '../components/HomePage/HomePage2';
import HomePage3 from '../components/HomePage/HomePage3';
import HomePage4 from '../components/HomePage/HomePage4';
const Home = () => {
  return (
    <>
    <div className='HomePage-container'>
    <HomePage1/>
    <HomePage2/>
    <HomePage3/>
    <HomePage4/>
    </div>
    </>
  )
}

export default Home;
