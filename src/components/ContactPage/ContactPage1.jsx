import React from 'react'
import '../CSS/ContactPage.css';
import contact from '../Images/Contact.svg';

const ContactPage1 = () => {
  return (
    <>
    <div className='contact1-container'>
                <div className='contact1-left'>
                    <div className='Para-1'>
                        <p className='p1'>KAITSolution Solicit for  </p>
                        <p className='p2'>embedding your response</p>
                        <p className='p3'> Get in touch with us</p>
                        {/* <button className='btn'> Enquire Internship </button> */}
                    </div>

                </div>
                <div className='contact1-right'>
                    <img src={ contact } alt="image" />
                </div>
            </div>
            {/* <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laboriosam libero, dolores corrupti cupiditate pariatur eius, perferendis provident commodi odio necessitatibus quam! Quas ipsam, sequi pariatur sed saepe nulla libero.</h1> */}
    </>
  )
}
export default ContactPage1;
