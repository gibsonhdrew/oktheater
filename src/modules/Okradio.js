import React, { Component } from 'react';
import okradio from '../images/pagetitles/okradio.png';

class Okradio extends Component {
    render() {  
        return (
            <div className='okrBody fades'>
                <img src={okradio} alt='OK Radio' className='pageTitle'/>
                <p>{this.props.location.state.message}</p>
            </div>
        )
    }
}

export default Okradio;
