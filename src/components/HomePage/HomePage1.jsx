import React from 'react'
import '../CSS/HomePage.css';
import homeImage from '../Images/Home-image.png';

const HomePage1 = () => {
    return (
        <>
            <div className='Home1-container'>
                <div className='Home1-left'>
                    <div className='Para-1'>
                        <p className='p1'>Welcome to KAITSolution</p>
                        <p className='p2'>Software Solutions Pvt. Ltd. Pune</p>
                        <p className='p3'> Innovation to Societal</p>
                        {/* <button className='btn'> Get Started </button> */}
                    </div>

                </div>
                <div className='Home1-right'>
                    <img src={ homeImage } alt="image" />
                </div>
            </div>

        </>
    )
}

export default HomePage1;
