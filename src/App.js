import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Weareok from './modules/Weareok'
import Splash from './modules/Splash'
import Oktheater from './modules/Oktheater'
import Okvideo from './modules/Okvideo'
import Okradio from './modules/Okradio'
import Okbooks from './modules/Okbooks'
import Contacts from './modules/Contacts'
import Post from './modules/Post'
import News from './modules/News'
import logo from './images/navbar/logo.png';
import wereok from './images/navbar/wereok.png';
import oktheater from './images/navbar/oktheater.png';
import okvideo from './images/navbar/okvideo.png';
import okradio from './images/navbar/okradio.png';
import okbooks from './images/navbar/okbooks.png';
import mailinglist from './images/mailinglist.png';
import oktwitter from './images/oktwitter.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        let self = this
        var oldPosts;
        var allPosts;
        axios.get('/oldposts3.json')
            .then(function(response) {
                oldPosts = response.data
            })
        axios.get('https://public-api.wordpress.com/wp/v2/sites/138138161/posts/?per_page=100')
            .then(function (response) {
                allPosts = response.data
                for (let i of oldPosts) {
                    allPosts.push(i)
                }
                self.setState({
                    wpData: allPosts
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        if (!this.state.wpData)
            return null;

        return (
            <Router>
                <div>
                    <div>
                        <ScrollToTopOnNav/>
                    </div>    
                    <Header wpData={this.state.wpData}/>
                    <Main wpData={this.state.wpData}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className='oktHeader fades'>
                <Link to='/news'>
                    <img src={logo} alt='logo' className='logo'/>
                </Link>
                <ul className="mainNav">
                    <Link className='navLink' to='/we-are-ok'>
                        <img src={wereok} alt='We&#8217;re OK' className='navItem'/>
                        <div className='lineHide'/>
                    </Link>
                    <Link className='navLink' to='/oktheater'>
                        <img src={oktheater} alt='OK Theater' className='navItem'/>
                        <div className='lineHide'/>
                    </Link>
                    <Link className='navLink' to='/okvideo'>
                        <img src={okvideo} alt='OK Video' className='navItem'/>
                        <div className='lineHide'/>
                    </Link>  
                    <Link className='navLink' to='/okradio'>
                        <img src={okradio} alt='OK Radio' className='navItem'/>
                        <div className='lineHide'/>
                    </Link>
                    <Link className='navLink' to='/okbooks'>
                        <img src={okbooks} alt='OK Books' className='navItem'/>
                        <div className='lineHide'/>
                    </Link>
                </ul>
            </div>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div className='mainBody'> 
                <Route exact path='/' render={(props) => (
                    <Splash {...props} wpData={this.props.wpData} />
                )}/>
                <Route exact path='/news' render={(props) => (
                    <News {...props} wpData={this.props.wpData} />
                )}/>
                    <Route path='/news/:ok' render={(props) => (
                        <Post {...props} wpData={this.props.wpData} />
                    )}/>
                <Route exact path='/we-are-ok' component={Weareok}/>
                <Route exact path='/contacts' component={Contacts}/>

                <Route exact path='/oktheater' render={(props) => (
                    <Oktheater {...props} wpData={this.props.wpData} />
                )}/>
                    <Route path='/oktheater/:ok' render={(props) => (
                        <Post {...props} wpData={this.props.wpData} />
                    )}/>

                <Route exact path='/okvideo' render={(props) => (
                    <Okvideo {...props} wpData={this.props.wpData} />
                )}/>
                    <Route path='/okvideo/:ok' render={(props) => (
                        <Post {...props} wpData={this.props.wpData} />
                    )}/>

                <Route exact path='/okradio' render={(props) => (
                    <Okradio {...props} wpData={this.props.wpData} />
                )}/>
                    <Route path='/okradio/:ok' render={(props) => (
                        <Post {...props} wpData={this.props.wpData} />
                    )}/>

                <Route exact path='/okbooks' render={(props) => (
                    <Okbooks {...props} wpData={this.props.wpData} />
                )}/>
                    <Route path='/okbooks/:ok' render={(props) => (
                        <Post {...props} wpData={this.props.wpData} />
                    )}/>
            </div>
        );
    }
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

const Footer = (props) => (
  <div style={{
    width:'100vw',
    height:'50px',
    paddingTop:'15px',
    paddingLeft: '50px',
    backgroundColor:'#222222'
  }} {...props}>
    <a href='http://eepurl.com/tEQzX'><FooterLink src={mailinglist}/></a>
    <a href='https://twitter.com/oktheater'><FooterLink src={oktwitter}/></a>
  </div>
)

const FooterLink = (props) => (
  <img style={{
    width: '200px',
    marginRight:'25px',
    filter: 'invert(100%)'
  }} alt='footerLink' {...props}/>
) 

const ScrollToTopOnNav = () => (
  <Route component={ScrollToTop}/>
)

export default App;
