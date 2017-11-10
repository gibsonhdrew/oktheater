import React, { Component } from 'react';
import oktheater from '../images/pagetitles/oktheater.png';


class Oktheater extends Component {
    render() {  
        return (
            <div className='oktBody fades'>
                <img src={oktheater} alt='OK Theater' className='pageTitle'/>
            </div>
        )
    }
}

export default Oktheater;
