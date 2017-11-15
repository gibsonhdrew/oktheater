import React, { Component } from 'react';
import oktheater from '../images/pagetitles/oktheater.png';


class Oktheater extends Component {
    componentDidMount() {
        var msg = this.props.location.state.message
        console.log(msg)
    }
    render() {  
        return (
            <div className='oktBody fades'>
                <img src={oktheater} alt='OK Theater' className='pageTitle'/>
                <p>{this.props.location.state.message}</p>
            </div>
        )
    }
}

export default Oktheater;
