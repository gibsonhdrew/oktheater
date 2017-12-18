import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Splash extends Component {
    render() {  
        return (
            <div className='fades'>
              <p>Splash page goes here!</p>
              <Link to='/news'><button>Enter</button></Link>
            </div>
        )
    }
}

export default Splash;
