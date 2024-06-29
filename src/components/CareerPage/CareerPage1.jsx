import React from 'react'
import '../CSS/CareerPage.css';
import services from '../Images/career1.png';
import { Link } from 'react-router-dom';

const CareerPage1 = () => {
  return (
    <>
    <div className='contact1-container'>
                <div className='contact1-left'>
                    <div className='Para-1'>
                        <button className='btn'>We're hiring</button>

                        <p className='p1'>Be part of our mission</p>
                        <p className='p3'>We're looking for passionate people to join us our mission. We value</p>
                        <p className='p3'> flat hierarchies, clear communication, and full ownership and responsiblity.</p>
                        {/* <button className='btn'> <Link to="/contact">Contact us</Link></button> */}
                    </div>

                </div>
                <div className='contact1-right'>
                    <img src={ services } alt="image" />
                </div>
            </div>
            {/* <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laboriosam libero, dolores corrupti cupiditate pariatur eius, perferendis provident commodi odio necessitatibus quam! Quas ipsam, sequi pariatur sed saepe nulla libero.</h1> */}
    </>
  )
}
export default CareerPage1;
