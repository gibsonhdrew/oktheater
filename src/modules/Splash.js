import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import kafka from '../images/kafka.png'


class Splash extends Component {
    render() {  
        return (
            <div className='fades' style={{
              height:'100vh',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Link to='/news'>
                <img src={kafka} alt='kafka' className='kafka' style={{
                  width: '55vw',
                  marginTop: '40px',
                  zIndex:'5000',
                  boxShadow: '3px 3px 3px #ECECEC',
                }}/>
              </Link>
              <br/>
            </div>
        )
    }
}

export default Splash;
