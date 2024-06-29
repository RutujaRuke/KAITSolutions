import React from 'react'
import '../CSS/ContactPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

const ContactPage2 = () => {
    return (
        <>

            <div className='contact-heading'>
                <h1>Contact Us</h1>
            </div>
            <div className='contact'>
                <div className='c2-contact'>
                    <div className='c-contact'>
                        <div className='c-info' >
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: '40px', height: '40px' }} />
                            <h2>Corporate Office</h2>
                            <p>Office No: 306, Gera's Imperium Alpha, Near EON IT Park, Kharadi, Pune 411014</p>
                        </div>
                        <div className='d-info'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: '40px', height: '40px' }} />
                            <h2>Development Office</h2>
                            <p>Office: 206, Mapple Woodz, Near Jain college, Wagholi, Pune 412207</p>
                        </div>
                    </div>


                    <div className='e-contact'>
                        <div className='c1-contact'>
                            <div className='Email_Us'>
                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '40px', height: '40px' }} />
                                <h2>Email Us</h2>
                                <p>hr@karishnaacademy.com</p>
                            </div>
                            <div className='Support'>
                                <FontAwesomeIcon icon={faTools} style={{ width: '40px', height: '40px' }} />
                                <h2>Support</h2>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <ContactForm />
                </div>


            </div>

        </>
    )
}

export default ContactPage2;
