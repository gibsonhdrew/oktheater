import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
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
    <div className='oktHeader' {...props}>
        <Link to='/'>
            <img src={logo} alt='logo' style={{
                width: "25%"
            }}></img>
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
    <div> 
        <Route path='/we-are-ok' component={Weareok}/>
        <Route path='/oktheater' component={Oktheater}/>
        <Route path='/okvideo' component={Okvideo}/>
        <Route path='/okradio' component={Okradio}/>
        <Route path='/okbooks' component={Okbooks}/>
        <Route path='/contacts' component={Contacts}/>
    </div>
)

const Weareok = (props) => (
    <div {...props}>
        <p>We are ok</p>
        <Link to='/contacts'><p>..Contacts</p></Link>
    </div>
)

const Oktheater = (props) => (
    <div {...props}>
        <p>Ok Theater</p>
    </div>
)

const Okvideo = (props) => (
    <div {...props}>
        <p>Ok Video</p>
    </div>
)

const Okradio = (props) => (
    <div {...props}>
        <p>Ok Radio</p>
    </div>
)

const Okbooks = (props) => (
    <div {...props}>
        <p>Ok Books</p>
    </div>
)

const Contacts = (props) => (
    <div {...props}>
        <p>Contacts</p>
    </div>
)

export default App;
