import React, { Component } from 'react';
import okvideo from '../images/pagetitles/okvideo.png';

class Okvideo extends Component {
    render() {  
        return (
            <div className='okvBody fades'>
                <img src={okvideo} alt='OK Video' className='pageTitle'/>
            </div>
        )
    }
}

export default Okvideo;
