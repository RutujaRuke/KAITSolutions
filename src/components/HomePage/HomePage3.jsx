import React from 'react'
import a1 from '../Images/image-3.gif';
import FAQ from './FAQ';

const HomePage3 = () => {
  return (
    <>
     <div className='a1-container'>
        <div className='a1-requirement'>
            <h2 className='h2-heading'>Why Us We have Optimal solution for Customer Requirements</h2>
            <p>We Make The Exact Plan For Right Pathway. Helping 
                the Innovation services with exact utilization. We're Quality of Business Service.</p>
                <FAQ/>    

        </div>
        <div className='a1-image'>
        <img src={a1} alt="a1"/>

        </div>
      </div>
      
    </>
  )
}

export default HomePage3;
