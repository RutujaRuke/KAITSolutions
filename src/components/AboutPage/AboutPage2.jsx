import React from 'react'
import '../CSS/AboutPage.css'
import aboutus from '../Images/ab1.jpg'
import aboutus1 from '../Images/ab2.jpg'
import aboutus2 from '../Images/ab3.jpg'
import aboutus3 from '../Images/ab4.jpg'
import aboutus4 from '../Images/ab5.jpg'

const AboutPage2 = () => {
  return (
    <>
    <div className='about-us'>
        <div className='about-us-img'>
            <img src={aboutus} alt="ab1" />
        </div>
        <div className='about-us-info'>
            <h2>Our Story</h2>
            <p>SuShiv Technologies is a leading technology services provider based in India. We are passionate about helping businesses achieve their goals through the power of technology. We design and build smart, cost-effective, and intuitive web applications, desktop applications, and mobile apps that help start-ups and established businesses alike.
                 With an office in Pune, our company is India's leading bespoke software development company. </p>
        </div>
    </div>
    <div className='about-us-team'>
        <h1>Our Expert Team</h1>
        <p>Our expert team comprises highly skilled professionals with diverse backgrounds and expertise in various fields of technology. From software development and data analysis to user experience design and project management, our team members bring a wealth of knowledge and experience to the table. They are dedicated to staying up-to-date with the latest industry trends, continuously learning and improving their skills, and collaborating closely to deliver exceptional results. With their combined expertise and passion for innovation,
             our team is committed to solving complex problems and driving forward the success of our tech company.</p>
    </div>
    <div className='headintag'>
    <h1>All the need that you want</h1>
    </div>
    <div className='about-us1'>
        
        <div className=' about-img1'></div>
        <div className='about-img2'>
        <img src={aboutus1} alt="ab2" /><br/>
        <h2>Professional Specialist</h2>
    </div>
    <div className='about-img2'>
        <img src={aboutus2} alt="ab3" /><br/>
        <h2>Perfect Management</h2>
    </div>
    <div className='about-img2'>
        <img src={aboutus3} alt="ab4" /><br />
        <h2>24/7 Assistance</h2>
    </div>
    <div className='about-img2'>
        <img src={aboutus4} alt="ab5" /><br />
        <h2>Brilliant Ideas</h2>
    </div>
    </div>
      
    </>
  )
}

export default AboutPage2;
