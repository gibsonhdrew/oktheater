import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import okvideo from '../images/pagetitles/okvideo.png';
import process_practice from '../images/video/process_practice.png';
import animations from '../images/video/animations.jpg';
import trailers from '../images/video/trailers.png';
import making_of from '../images/video/making_of.jpg';
import berlin_screen_tests from '../images/video/berlin_screen_tests.png';


class Okvideo extends Component {
    render() {  
        return (
            <div className='oktBody fades'>
                <img src={okvideo} alt='OK Video' className='pageTitle'/>
                <div className='pageBody'>
                    <div className='postGrid' style={{display:'flex',flexWrap:'wrap'}}>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/trailers'}>
                                <img className='gmVideoImg' src={trailers} alt='img' style={{
                                    height:'100%',
                                    objectFit:'cover'
                                }}/>
                                <p style={{
                                    color:'white',
                                    width:'calc(100% - 2px)', 
                                    height: '30px',
                                    marginTop: '-38px',
                                    paddingTop: '8px',
                                    backgroundColor: '#222222',
                                    opacity:'0.8', 
                                    fontWeight:'bold'
                                }}>Trailers</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/making-of'}>
                                <img className='gmVideoImg' src={making_of} alt='img' style={{
                                    height:'100%',
                                    objectFit:'cover'
                                }}/>
                                <p style={{
                                    color:'white',
                                    width:'calc(100% - 2px)', 
                                    height: '30px',
                                    marginTop: '-38px',
                                    paddingTop: '8px',
                                    backgroundColor: '#222222',
                                    opacity:'0.8', 
                                    fontWeight:'bold'
                                }}>Making-of</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/process-practice'}>
                                <img className='gmVideoImg' src={process_practice} alt='img' style={{
                                    height:'100%',
                                    objectFit:'cover'
                                }}/>
                                <p style={{
                                    color:'white',
                                    width:'calc(100% - 2px)', 
                                    height: '30px',
                                    marginTop: '-38px',
                                    paddingTop: '8px',
                                    backgroundColor: '#222222',
                                    opacity:'0.8', 
                                    fontWeight:'bold'
                                }}>Process / Practice</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/animations'}>
                                <img className='gmVideoImg' src={animations} alt='img' style={{
                                    height:'100%',
                                    objectFit:'cover'
                                }}/>
                                <p style={{
                                    color:'white',
                                    width:'calc(100% - 2px)', 
                                    height: '30px',
                                    marginTop: '-38px',
                                    paddingTop: '8px',
                                    backgroundColor: '#222222',
                                    opacity:'0.8', 
                                    fontWeight:'bold'
                                }}>Animations</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/screen-tests'}>
                                <img className='gmVideoImg' src={berlin_screen_tests} alt='img' style={{
                                    height:'100%',
                                    objectFit:'cover'
                                }}/>
                                <p style={{
                                    color:'white',
                                    width:'calc(100% - 2px)', 
                                    height: '30px',
                                    marginTop: '-38px',
                                    paddingTop: '8px',
                                    backgroundColor: '#222222',
                                    opacity:'0.8', 
                                    fontWeight:'bold'
                                }}>Screen Tests</p>
                            </Link>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/><br/>
                </div>
            </div>
        )
    }
}

export default Okvideo;
