import React from 'react'
import clientimg from '../Images/c1.jpg'
import '../CSS/ClientPage.css'

const ClientPage2 = () => {
  return (
    <>
     <h1>Industries We Serve</h1>
    <div className='client'>
   
        
        <div className='client-info'>
        
            <h2> Successfully delivered digital products</h2>
            <p>Solving business problems is in our DNA. And Sushiv tech has the technology expertise to make this happen. You have the idea and we have just
                 right resources with rich industry experience that your software development project needs</p>
                 <button className='client-btn'>Service</button>
        </div>
         <div className='client-img'>
            <img src={clientimg} alt="c1.jpg" />
        </div> 

    </div>
    <div className='client1'>
        <div className='client1-info'>
            <h2>Experience World-class Agile <br/>Product Development</h2>
            <p>At Sushiv, Our passionate, user-oriented designers
                 have an iron grip of the tools we use to build exceptional digital experiences.</p>
                 <button className='client-btn'>Contact</button> 
        </div>
        <div className='client2'>

        </div>
    </div>
    <div className='client3'>
        <h2>Our Happy Clients</h2>
        <div className='client4'>
            <div className='client5'>
                <div className='client5img'>
                <img src={clientimg} alt="c1.jpg" />
                </div>
                <div className='client5info'>
                    <p>”Every day, they strive to improve their service to the clients by developing the right blend of 
                        technology and creativity to make sure every job done is done as efficiently as possible.”</p>
                        <p>-Clarice Turner</p>
                </div>
            </div>
            <div className='client5'>
                <div className='client5img'>
                <img src={clientimg} alt="c1.jpg" />
                </div>
                <div className='client5info'>
                    <p>”Every day, they strive to improve their service to the clients by developing the right blend of 
                        technology and creativity to make sure every job done is done as efficiently as possible.”</p>
                        <p>-Clarice Turner</p>
                </div>
            </div>
            
        </div>
        <div className='client4'>
            <div className='client5'>
                <div className='client5img'>
                <img src={clientimg} alt="c1.jpg" />
                </div>
                <div className='client5info'>
                    <p>”Every day, they strive to improve their service to the clients by developing the right blend of 
                        technology and creativity to make sure every job done is done as efficiently as possible.”</p>
                        <p>-Clarice Turner</p>
                </div>
            </div>
            <div className='client5'>
                <div className='client5img'>
                <img src={clientimg} alt="c1.jpg" />
                </div>
                <div className='client5info'>
                    <p>”Every day, they strive to improve their service to the clients by developing the right blend of 
                        technology and creativity to make sure every job done is done as efficiently as possible.”</p>
                        <p>-Clarice Turner</p>
                </div>
            </div>
            
        </div>
        
    </div>
    
      
    </>
  )
}

export default ClientPage2;
