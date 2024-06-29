import React from 'react'
import '../CSS/HomePage.css'
import homeimage2 from '../Images/Home-image2.jpg'
import { Link } from 'react-router-dom'

const HomePage2 = () => {
    return (
        <>  <div className='a-heading'>
            <h1>About us</h1>
        </div>
            <div className='a-containter'>
                <div className='a-image'>
                    <img src={homeimage2} alt="a" />
                </div>
                <div className='a11-container'>
                    <div className='a-content'>
                        <p>Karishna Academy Software Solutions Pvt.Ltd. skilled Software development and Service Company established in Pune. 
                            The Prime IT services required have dedicated to explore a society with technical Innovations.We principally consider distinctive IT services together with custom website design and development services and Features.</p>
                        <div className='a-btn'>
                            <button><Link to="/about">Learn more</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default HomePage2;
