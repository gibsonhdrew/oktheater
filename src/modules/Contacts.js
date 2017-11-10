import React, { Component } from 'react';
import contactus from '../images/pagetitles/contactus.png';

class Contacts extends Component {
    render() {  
        return (
            <div className='contactsBody fades'>
                <img src={contactus} alt='Contact Us' className='pageTitle'/>
            </div>
        )
    }
}

export default Contacts;
