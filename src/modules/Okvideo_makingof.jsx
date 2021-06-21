import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import animations from '../images/video/animations.jpg';
import berlin_screen_tests from '../images/video/berlin_screen_tests.png';
import nb_thumb from '../images/makingof-thumbs/nibelungen.jpg';
import d2071 from '../images/makingof-thumbs/deutschland.jpg';
import kinder from '../images/makingof-thumbs/kinder.jpg';
import no_president from '../images/makingof-thumbs/no-president.jpg';
import lte07 from '../images/makingof-thumbs/lte07.jpg';


class Okvideo_makingof extends Component {
    render() {  
        return (
            <div className='oktBody fades'>
                <h2>Making-of</h2>
                <div className='pageBody'>
                    <div className='postGrid' style={{display:'flex',flexWrap:'wrap'}}>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/makingof/making-of-no-president'}>
                                <img className='gmVideoImg' src={no_president} alt='img' style={{
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
                                }}>No President</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/makingof/making-of-kinder-der-toten'}>
                                <img className='gmVideoImg' src={kinder} alt='img' style={{
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
                                }}>Kinder der Toten</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/makingof/making-of-deutschland-2071'}>
                                <img className='gmVideoImg' src={d2071} alt='img' style={{
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
                        }}>
                            <Link to={'/okvideo/makingof/making-of-die-nibelungen'}>
                                <img className='gmVideoImg' src={nb_thumb} alt='img' style={{
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
                        }} hidden>
                            <Link to={'/okvideo/makingof/making-of-life-and-times-episode-9'}>
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
                                }}>Life and Times Episode 9</p>
                            </Link>
                        </div>

                        <div className='gridMapVideo fades' style={{
                            backgroundColor:'white',
                            marginTop:'20px',
                            marginRight:'15px'
                        }}>
                            <Link to={'/okvideo/makingof/making-of-life-and-times-episode-7'}>
                                <img className='gmVideoImg' src={lte07} alt='img' style={{
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
                        }} hidden>
                            <Link to={'/okvideo/makingof/making-of-life-and-times-episode-6'}>
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
                                }}>Life and Times Episode 6</p>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Okvideo_makingof;
