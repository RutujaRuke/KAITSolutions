import React from 'react'
import '../CSS/ContactPage.css';
import services from '../Images/services.webp';
import { Link } from 'react-router-dom';

const ServicePage1 = () => {
  return (
    <>
    <div className='contact1-container'>
                <div className='contact1-left'>
                    <div className='Para-1'>
                        <p className='p1'>KAITSolution </p>
                        <p className='p2'>We provide a wide range of services</p>
                        <p className='p3'> Get in touch with us</p>
                        <button className='btn'> <Link to="/contact">Contact us</Link></button>
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
export default ServicePage1;