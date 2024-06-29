import React from 'react'
import Example from '../Images/t1.jpg'
import Example1 from '../Images/t2.jpg'
import { Link } from 'react-router-dom'
import '../CSS/TechnologyPage.css'

const TechnologyPage2 = () => {
  return (
    <>
      <div className='tech'>
        <div className='tech-info'>
          <h2>How does KAITSolutions help?</h2>
          <p>Since 2024, team KAITSolutions has learned more from failure in developing software with the evolving nature of business innovation and intelligence. IT companies help businesses by providing technology solutions, consulting services, support, and maintenance, driving innovation and research, and facilitating digital transformation. They leverage their expertise and technical skills to streamline operations, improve efficiency, enhance customer experiences, and enable businesses to adapt and thrive in the digital age. We develop successful software solutions
            meant for web and mobile applications for start-ups and enterprises with guranteed delivery.</p>
        </div>
        <div className='tech-img'>
          <img src={Example} alt="t1" />
        </div>
      </div>


      <div className='tech1'>
        <div className='tech-img'>
          <img src={Example1} alt="t2.jpg" />
        </div>

        <div className='tech1-info'>
          <h2 >Technologies We Work With</h2>
          <p>We develop successful software solutions for
            web and mobile applications for start-ups and enterprises with guranteed delivery.</p>
          <div className='tech2'>
            <div className='tech3'>
              <div className='FrontEnd'>
                <h2>Front End</h2>
                <p>ReactJS, HTML 5, CSS, XML, and TypeScript.</p>
              </div>
              <div className='FrontEnd'>
                <h2>Back End</h2>
                <p>Java, Python, PHP, Node,  .NET, and Rails.</p>
              </div>
            </div>
            <div className='tech4'>
              <div className='FrontEnd'>
                <h2>Database</h2>
                <p>MySQL, MongoDB, DynamoDB, PostgreDB, and Oracle.</p>
              </div>
              <div className='FrontEnd'>
                <h2>Mobile</h2>
                <p>iOS App Development, Android Mobile App, Flutter,
                  </p>
              </div>
            </div>
            <div className='tech4'>
              <div className='FrontEnd'>
                <h2>Data Science</h2>
                <p>AI-ML, Python, R, SQL, Tableau, TenserFlow, NoSQL, and Hadoop.</p>
              </div>
              <div className='FrontEnd'>
                <h2>Data Analysis</h2>
                <p>Azure, AWS, Google Cloud, and Hudson.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
      
        <button className='contct-btn'><Link to='/contact'>Contact us</Link></button>
      

    </>
  )
}

export default TechnologyPage2;
