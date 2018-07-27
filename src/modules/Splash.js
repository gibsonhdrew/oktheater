import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Splash extends Component {
    render() {  
        return (
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <div className='splashBG' style={{
              backgroundColor:'#F6F6F6',
              width:'100vw',
              opacity:'0.99',
              zIndex:'101',
              position:'absolute',
              top:'0',
              left:'0'
            }}/>
            <Link style={{ opacity: '0.99', zIndex: '110' }} to='/news'>
                <div className='kafka fades' style={{
                  marginTop: '30px',
                  zIndex:'5000',
                  backgroundColor:'white',
                  boxShadow: '3px 3px 3px #EFEFEF',
                  opacity:'0.9',
                  borderRadius: '2px',
                }}>
                  <p>
                    &quot;Personnel is being hired for the Theater in Oklahoma! The Great Nature Theater of Oklahoma is calling you! It&#39;s calling you today only! If you miss this opportunity, there will never be another! Anyone thinking of his future, your place is with us! All welcome! Anyone who wants to be an artist, step forward! We are the theater that has a place for everyone, everyone in his place! If you decide to join us, we congratulate you here and now! But hurry, be sure not to miss the midnight deadline! We shut down at midnight, never to reopen! Accursed be anyone who doesn&#39;t believe us!&quot;
                  </p>
                  <h3 style={{marginLeft: '60%',marginTop:'30px'}}>
                    -Franz Kafka
                  </h3>
                  <br/>
          <br/>
          <br/>
                  <h2 className='fades' style={{marginLeft: '40%', color:'#555555'}}>
                    Enter Site  
                  </h2>
                </div>
              </Link>
              <br/>
            </div>
        )
    }
}

export default Splash;
