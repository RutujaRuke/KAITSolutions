import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-info'>
                    <h2>Karishna Academy IT Solution</h2>
                    <p>Corporate Office<br />
                        Office No: 306, Gera's Imperium Alpha, Near EON IT Park, Kharadi, Pune 411014<br />
                        Email: hr@proazuresoft.com<br />
                        Development Office<br />
                        Office: 206, Mapple Woodz, Near Jain college, Wagholi Pune 412207<br />
                        Email: hr@karishnaacademy.com</p>
                </div>
                <div className='Useful-Links'>
                    <h3>Useful Links</h3>
                     <ul>
                                <li >
                                    Home
                                </li>
                                <li >
                                    Portfolio
                                </li>
                                <li >
                                    Contact
                                </li>
                                {/* <li >
                                    <Link to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                        <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                                    </ul>
                                    </li> */}
                                    </ul> 
                </div>
                <div className='Our-Services'>
                    <h3>Our Services</h3>
                <ul>
                                <li >
                                Web Design
                                </li>
                                <li >
                                Mobile Applications
                                </li>
                                <li >
                                RPA Service
                                </li>
                                <li >
                                SAP Development
                                </li>
                                <li >
                                Educational
                                </li>

                                </ul>

                </div>

            </div>
            <div className='copyright'>
                
                    <p>Copyright©-2024- PrivacyDesigned by Krishna Acadmey Software Solutions Pvt. Ltd.</p>
                

            </div>

        </>
    )
}

export default Footer
