import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Splash extends Component {
    render() {  
        return (
            <div className='fades' style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Link to='/news'>
                <div className='kafka' style={{
                  marginTop: '40px',
                  zIndex:'5000',
                  boxShadow: '3px 3px 3px #ECECEC',
                  opacity: '0.8',
                  borderRadius: '2px',
                  padding: '20px'
                }}>
                  <p>
                    &quot;Personnel is being hired for the Theater in Oklahoma! The Great Nature Theater of Oklahoma is calling you! It&#39;s calling you today only! If you miss this opportunity, there will never be another! Anyone thinking of his future, your place is with us! All welcome! Anyone who wants to be an artist, step forward! We are the theater that has a place for everyone, everyone in his place! If you decide to join us, we congratulate you here and now! But hurry, be sure not to miss the midnight deadline! We shut down at midnight, never to reopen! Accursed be anyone who doesn&#39;t believe us!&quot;
                  </p>
                  <p style={{marginLeft: '60%'}}>
                    -Franz Kafka
                  </p>
                  <br/>
                  <h3 style={{marginLeft: '40%'}}>
                    Enter Site  
                  </h3>
                </div>
              </Link>
              <br/>
            </div>
        )
    }
}

export default Splash;
