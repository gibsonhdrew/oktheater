import React, { Component } from 'react';
import okbooks from '../images/pagetitles/okbooks.png';

class Okbooks extends Component {
    componentDidMount() {
        console.log(this.props.wpData)
    }
    render() {  
        return (
            <div className='okbBody fades'>
                <img src={okbooks} alt='OK Books' className='pageTitle'/>
            </div>
        )
    }
}

export default Okbooks;
