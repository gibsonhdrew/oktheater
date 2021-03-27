import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Weareok from "./modules/Weareok";
import Splash from "./modules/Splash";
import Oktheater from "./modules/Oktheater";
import Okvideo from "./modules/Okvideo";
import Okvideo_makingof from "./modules/Okvideo_makingof";
import Okvideo_processpractice from "./modules/Okvideo_processpractice";
import Okradio from "./modules/Okradio";
import Okbooks from "./modules/Okbooks";
import Okmoto from "./modules/Okmoto";
import Contacts from "./modules/Contacts";
import Post from "./modules/Post";
import News from "./modules/News";
import logo from "./images/navbar/logo.png";
import wereok from "./images/navbar/wereok.png";
import oktheater from "./images/navbar/oktheater.png";
import okvideo from "./images/navbar/okvideo.png";
import okradio from "./images/navbar/okradio.png";
import okbooks from "./images/navbar/okbooks.png";
import okmoto from "./images/navbar/okmoto.png";
import mailinglist from "./images/footer/mailinglist.png";
import facebook from "./images/footer/facebook.png";
import contact from "./images/footer/contact.png";
import twitter from "./images/footer/twitter.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let self = this;
    var oldPosts;
    var allPosts;
    axios.get("/oldposts3.json").then(function (response) {
      oldPosts = response.data;
    });
    axios
      .get(
        "https://public-api.wordpress.com/wp/v2/sites/138138161/posts/?per_page=100"
      )
      .then(function (response) {
        allPosts = response.data;
        for (let i of oldPosts) {
          allPosts.push(i);
        }
        self.setState({
          wpData: allPosts,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (!this.state.wpData)
      return (
        <h1 style={{ marginTop: "20px", marginLeft: "10px" }}>
          One moment please...
        </h1>
      );

    return (
      <Router>
        <div className="app">
          <div>
            <ScrollToTopOnNav />
          </div>
          <Header wpData={this.state.wpData} />
          <Main wpData={this.state.wpData} />
          <Footer />
        </div>
      </Router>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="oktHeader fades">
        <Link to="/news">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="mainNav">
          <Link className="navLink" to="/we-are-ok">
            <img src={wereok} alt="We&#8217;re OK" className="navItem" />
            <div className="lineHide" />
          </Link>
          <Link className="navLink" to="/oktheater">
            <img src={oktheater} alt="OK Theater" className="navItem" />
            <div className="lineHide" />
          </Link>
          <Link className="navLink" to="/okvideo">
            <img src={okvideo} alt="OK Video" className="navItem" />
            <div className="lineHide" />
          </Link>
          <Link className="navLink" to="/okradio">
            <img src={okradio} alt="OK Radio" className="navItem" />
            <div className="lineHide" />
          </Link>

          <Link className="navLink" to="/okbooks">
            <img src={okbooks} alt="OK Books" className="navItem" />
            <div className="lineHide" />
          </Link>
          <Link className="navLink" to="/okmoto">
            <img src={okmoto} alt="OK Moto" className="navItem" />
            <div className="lineHide" />
          </Link>
        </ul>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="mainBody">
        <Route
          exact
          path="/"
          render={(props) => <Splash {...props} wpData={this.props.wpData} />}
        />
        <Route
          exact
          path="/news"
          render={(props) => <News {...props} wpData={this.props.wpData} />}
        />
        <Route
          path="/news/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />
        <Route exact path="/we-are-ok" component={Weareok} />
        <Route exact path="/contacts" component={Contacts} />

        <Route
          exact
          path="/oktheater"
          render={(props) => (
            <Oktheater {...props} wpData={this.props.wpData} />
          )}
        />
        <Route
          path="/oktheater/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />

        <Route
          exact
          path="/okvideo"
          render={(props) => <Okvideo {...props} wpData={this.props.wpData} />}
        />
        <Route
          exact
          path="/okvideo/makingof"
          render={(props) => (
            <Okvideo_makingof {...props} wpData={this.props.wpData} />
          )}
        />
        <Route
          path="/okvideo/makingof/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />
        <Route
          exact
          path="/okvideo/processpractice"
          render={(props) => (
            <Okvideo_processpractice {...props} wpData={this.props.wpData} />
          )}
        />
        <Route
          path="/okvideo/processpractice/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />
        <Route
          exact
          path="/okvideo/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />

        <Route
          exact
          path="/okradio"
          render={(props) => <Okradio {...props} wpData={this.props.wpData} />}
        />
        <Route
          path="/okradio/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />

        <Route
          exact
          path="/okbooks"
          render={(props) => <Okbooks {...props} wpData={this.props.wpData} />}
        />
        <Route
          path="/okbooks/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />

        <Route
          exact
          path="/okmoto"
          render={(props) => <Okmoto {...props} wpData={this.props.wpData} />}
        />
        <Route
          path="/okmoto/:ok"
          render={(props) => <Post {...props} wpData={this.props.wpData} />}
        />
      </div>
    );
  }
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

const Footer = (props) => (
  <div
    className="footer"
    style={{
      width: "100vw",
      paddingTop: "15px",
      backgroundColor: "#222222",
    }}
    {...props}
  >
    <a href="http://eepurl.com/tEQzX">
      <FooterLink className="mailinglist" src={mailinglist} />
    </a>
    <a href="https://www.facebook.com/oktheater/">
      <FooterLink src={facebook} />
    </a>
    <a href="https://twitter.com/oktheater">
      <FooterLink src={twitter} />
    </a>
    <a href="mailto:kelly@oktheater.org">
      <FooterLink src={contact} />
    </a>
  </div>
);

const FooterLink = (props) => (
  <img
    style={{
      height: "20px",
      marginTop: "5px",
      marginRight: "30px",
      filter: "invert(100%)",
    }}
    alt="footerLink"
    {...props}
  />
);

const ScrollToTopOnNav = () => <Route component={ScrollToTop} />;

export default App;
