import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Weareok from './modules/Weareok'
import Oktheater from './modules/Oktheater'
import Okvideo from './modules/Okvideo'
import Okradio from './modules/Okradio'
import Okbooks from './modules/Okbooks'
import Contacts from './modules/Contacts'
import logo from './images/logo.jpg';

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
            <Link to='/we-are-ok'><li>We&#39;re OK</li></Link>
            <Link to='/oktheater'><li>OK Theater</li></Link>
            <Link to='/okvideo'><li>OK Video</li></Link>  
            <Link to='/okradio'><li>OK Radio</li></Link>
            <Link to='/okbooks'><li>OK Books</li></Link>
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
