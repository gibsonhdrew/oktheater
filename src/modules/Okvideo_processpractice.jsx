import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import okvideo from '../images/pagetitles/okvideo.png';
import process_practice from '../images/video/process_practice.png';
import animations from '../images/video/animations.jpg';
import trailers from '../images/video/trailers.png';
import making_of from '../images/video/making_of.jpg';
import berlin_screen_tests from '../images/video/berlin_screen_tests.png';
import lt7 from '../images/processpractice-thumbs/lt7.jpg';
import lt8 from '../images/processpractice-thumbs/lt8.jpg';


class Okvideo_processpractice extends Component {
    render() {  
        return (
            <div className='oktBody fades'>
                <h2>Process / Practice</h2>
                <div className='pageBody'>
                    <div className='postGrid' style={{display:'flex',flexWrap:'wrap'}}>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }} hidden>
                            <Link to={'/okvideo/processpractice/process-practice-deutschland-2071'}>
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
                                }}>Deutschland 2071</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }} hidden>
                            <Link to={'/okvideo/processpractice/process-practice-die-nibelungen'}>
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
                                }}>Die Nibelungen</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/processpractice/process-practice-life-and-times-episode-7'}>
                                <img className='gmVideoImg' src={lt7} alt='img' style={{
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
                                }}>Life and Times Episode 7</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/processpractice/process-practice-life-and-times-episode-8'}>
                                <img className='gmVideoImg' src={lt8} alt='img' style={{
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
                                }}>Life and Times Episode 8</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }} hidden>
                            <Link to={'/okvideo/processpractice/process-practice-life-and-times-episode-5'}>
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
                                }}>Life and Times Episode 5</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }} hidden>
                            <Link to={'/okvideo/processpractice/process-practice-life-and-times-episodes-3-4'}>
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
                                }}>Life and Times Episodes 3&4</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }} hidden>
                            <Link to={'/okvideo/processpractice/process-pratice-no-dice'}>
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
                                }}>No Dice</p>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Okvideo_processpractice;
