import React from 'react'
import java from '../Images/java.jpg';
import python from '../Images/python.png';
import js from '../Images/Javascript.webp';
import react from '../Images/react.png';
import node from '../Images/node.webp';
import mongo from '../Images/Mongo.jpg'
import mysql from '../Images/mysql.jpg'
import php from '../Images/php.jpg'


const HomePage4 = () => {
    return (
        <>
            <div className="technology-container">
                <div className='technology-heading'>
                    <h1 className='tec-h1'>We Work With Technologies</h1>
                </div>
                <div className='div-row1'>
                    <div className='box-1'>
                        <div className='html-con'>
                            <div className="html-logo">
                                <img src={java} alt="html" className='html-image' />
                            </div>
                            <div className="html-heading">
                                <h3>JAVA</h3>
                            </div>
                        </div>
                    </div>
                    <div className='box-1'>
                        <div className='css-con'>
                            <div className="css-logo">
                                <img src={python} alt="html" className='html-image' />
                            </div>
                            <div className="css-heading">
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className='box-1'>
                        <div className='js-con'>
                            <div className="js-logo">
                                <img src={js} alt="js" className='html-image' />
                            </div>
                            <div className="js-heading">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='box-1'>
                        <div className='react-con'>
                            <div className="react-logo">
                                <img src={react} alt="react" className='html-image' />
                            </div>
                            <div className="react-heading">
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-row2'>
                    <div className='box-1'>
                        <div className='node-con'>
                            <div className="node-logo">
                                <img src={node} alt="node" className='html-image' />
                            </div>
                            <div className="node-heading">
                                <h3>Node JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='box-1'>
                        <div className='mongo-con'>
                            <div className="mongo-logo">
                                <img src={mongo} alt="mongo" className='html-image' />
                            </div>
                            <div className="mongo-heading">
                                <h3>Mongo DB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='box-1'>
                        <div className='sql-con'>
                            <div className="sql-logo">
                                <img src={mysql} alt="sql" className='html-image' />
                            </div>
                            <div className="sql-heading">
                                <h3>My SQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='box-1'>
                        <div className='php-con'>
                            <div className="php-logo">
                                <img src={php} alt="react" className='html-image' />
                            </div>
                            <div className="php-heading">
                                <h3>PHP</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage4;
