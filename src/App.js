import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Weareok from './modules/Weareok'
import Oktheater from './modules/Oktheater'
import Okvideo from './modules/Okvideo'
import Okradio from './modules/Okradio'
import Okbooks from './modules/Okbooks'
import Contacts from './modules/Contacts'
import logo from './images/navbar/logo.png';
import wereok from './images/navbar/wereok.png';
import oktheater from './images/navbar/oktheater.png';
import okvideo from './images/navbar/okvideo.png';
import okradio from './images/navbar/okradio.png';
import okbooks from './images/navbar/okbooks.png';

class App extends Component {
    render() {
        return (
            <Router>
                <Root>
                    <Header/>
                    <Main/>
                </Root>
            </Router>
        );
    }
}

const Root = (props) => (
    <div style={{
        
    }} {...props} />
)

const Header = (props) => (
    <div className='oktHeader fades' {...props}>
        <Link to='/'>
            <img src={logo} alt='logo' className='logo'/>
        </Link>
        <ul className="mainNav">
            <Link to='/we-are-ok'>
                <img src={wereok} alt='We&#8217;re OK' className='navItem'/>
             </Link>
            <Link to='/oktheater'>
                <img src={oktheater} alt='OK Theater' className='navItem'/>
            </Link>
            <Link to='/okvideo'>
                <img src={okvideo} alt='OK Video' className='navItem'/>
            </Link>  
            <Link to='/okradio'>
                <img src={okradio} alt='OK Radio' className='navItem'/>
            </Link>
            <Link to='/okbooks'>
                <img src={okbooks} alt='OK Books' className='navItem'/>
            </Link>
        </ul>
    </div>
)

const Main = (props) => (
    <div className='mainBody'> 
        <Route path='/we-are-ok' component={Weareok}/>
        <Route path='/oktheater' component={Oktheater}/>
        <Route path='/okvideo' component={Okvideo}/>
        <Route path='/okradio' component={Okradio}/>
        <Route path='/okbooks' component={Okbooks}/>
        <Route path='/contacts' component={Contacts}/>
    </div>
)

export default App;
