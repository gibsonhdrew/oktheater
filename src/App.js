import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Weareok from './modules/Weareok'
import Oktheater from './modules/Oktheater'
import Okvideo from './modules/Okvideo'
import Okradio from './modules/Okradio'
import Okbooks from './modules/Okbooks'
import Contacts from './modules/Contacts'
import logo from './images/navbar/logo.png';
import wereok from './images/pagetitles/wereok.png';
import oktheater from './images/pagetitles/oktheater.png';
import okvideo from './images/pagetitles/okvideo.png';
import okradio from './images/pagetitles/okradio.png';
import okbooks from './images/pagetitles/okbooks.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        var self = this;
        axios.get('https://public-api.wordpress.com/wp/v2/sites/138138161/posts')
            .then(function (response) {
                self.setState({
                    wpData: response.data 
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        if (!this.state.wpData)
            return null;

        return (
            <Router>
                <div>
                    <Header wpData={this.state.wpData}/>
                    <Main wpData={this.state.wpData}/>
                </div>
            </Router>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className='oktHeader fades'>
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
        );
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div className='mainBody'> 
                <Route path='/we-are-ok' component={Weareok}/>
                <Route path='/contacts' component={Contacts}/>
                <Route exact path='/oktheater' render={(props) => (
                    <Oktheater {...props} wpData={this.props.wpData} />
                )}/>
                <Route exact path='/okvideo' render={(props) => (
                    <Okvideo {...props} wpData={this.props.wpData} />
                )}/>
                <Route exact path='/okradio' render={(props) => (
                    <Okradio {...props} wpData={this.props.wpData} />
                )}/>
                <Route path='/okbooks' component={Okbooks}/>
                <Route exact path='/okbooks' render={(props) => (
                    <Okbooks {...props} wpData={this.props.wpData} />
                )}/>
            </div>
        );
    }
}

export default App;
