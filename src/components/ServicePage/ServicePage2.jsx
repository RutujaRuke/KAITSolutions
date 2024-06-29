import React from 'react'
import '../CSS/ServicePage.css'
import Image from '../Images/s6.jpg';
import Image1 from '../Images/s3.jpg';
import Image2 from '../Images/s4.jpg';
import Image3 from '../Images/s5.jpg';
import Image4 from '../Images/s8.jpg';

const ServicePage2 = () => {
    return (
        <>
            <div className='RPA-BOT-SERVICES'>
                <h1>SAP SERVICES</h1>
            </div>
            <div className='sap'>
                <div className='sap-img'>
                    <img src={Image} alt="s6" />
                </div>
                <div className='sap-info'>
                    <h2>SAP Development and Support</h2>
                    <p>The advantage of ProAzure Software Services Pvt.Ltd. proven end-to-end SAP implementation practices and processes that lets you to streamline sales, finance, production and all business process. Our SAP technical and functional consultants have a proven track record of delivering excellence across various countries and continents. Successful ERP implementations are our signature and ProAzure has successfully supported business transformations through successful ERP implementation.
                        Our ERP project leadership, expertise, and methodology distinguish us from the rest.</p>
                </div>
            </div>
            <div className='RPA-BOT-SERVICES'>
                <h1>WEB APPLICATIONS</h1>
            </div>
            <div className='web'>
                <div className='web-info'>
                    <h2>Web Applications</h2>
                    <p>Web application development works with frameworks. We are Involving such applications, which are developed specifically for a particular platform or device and installed on that device.

                        In contrast, web applications use web documents written in a standard format such as HTML and JavaScript, which are supported by a variety of web browsers. Web applications can be considered as a specific variant of client-server software where the client software is downloaded to the client machine when visiting the relevant web page, using standard procedures such as HTTP.

                        Client web software updates may happen each time the web page is visited. During the session, the web browser interprets and displays the pages, and acts as the universal client for any web application.</p>
                </div>
                <div className='web-img'>
                    <img src={Image1} alt="s3" />

                </div>
            </div>
            <div className='RPA-BOT-SERVICES'>
                <h1>ANDROID SERVICES</h1>
            </div>
            <div className='sap'>
                <div className='sap-img'>
                    <img src={Image3} alt="s5" />
                </div>
                <div className='sap-info'>
                    <h2>Android Applications</h2>
                    <p>Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit, while using other languages is also possible

                        Quickly identify performance issues and view full end-to-end distributed trace to see the exact poor-performing API call and surface any related Angular errors. Improve Android performance with max efficiency, not max effort.

                        See Android app crash reports with details that we never have to expect or dig through an Android error log. Analyze and group Android exceptions intuitively to eliminate noise. Monitor errors at scale without impacting throughput in production.</p>
                </div>
            </div>
            <div className='RPA-BOT-SERVICES'>
                <h1>WEB SERVICES</h1>
            </div>
            <div className='web'>
                <div className='web-info'>
                    <h2>WEBSITE SERVICES</h2>
                    <p>Web design is concerning the business with the targeted audiences and the prospective customers. Web design creates an impression of the brand in the virtual market.

                        Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. Pr
                        oAzure offer free one year maintenance for website development also website pages are having responsive.</p>
                </div>
                <div className='web-img'>
                    <img src={Image2} alt="s4" />

                </div>
            </div>
            <div className='RPA-BOT-SERVICES'>
                <h1>Digital Marketing</h1>
            </div>
            
            <div className='web'>
            <div className='web-img'>
                    <img src={Image4} alt="s7" />

                </div>
                <div className='web-info'>
                    <h2>Digital Marketing</h2>
                    <p>Web design is concerning the business with the targeted audiences and the prospective customers. Web design creates an impression of the brand in the virtual market.

                        Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. Pr
                        oAzure offer free one year maintenance for website development also website pages are having responsive.</p>
                </div>
                
            </div>

        </>
    )
}

export default ServicePage2;
