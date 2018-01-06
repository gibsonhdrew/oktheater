import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import news from '../images/news.png';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let newsTitles = []
    let newsPosts = []
    let newsUrls = []

    let theaterTitles = []
    let theaterPosts = []
    let theaterUrls = []

    let data = this.props.wpData
    for (let i=0;i<data.length;i++) {
      if (data[i].tags[0] === 103) { // wp tag 'news'
        newsTitles.push(data[i].title.rendered)
        newsPosts.push(data[i].content.rendered)
        newsUrls.push(data[i].slug)
      }
      if (data[i].tags[0] === 14694) { // wp tag 'theater'
        theaterTitles.push(data[i].title.rendered)
        theaterPosts.push(data[i].content.rendered)
        theaterUrls.push(data[i].slug)
      }
      theaterTitles.slice(0,3)
      theaterPosts.slice(0,3)
      theaterUrls.slice(0,3)
    }
    this.setState({
      theaterTitles: theaterTitles,
      theaterPosts: theaterPosts,
      theaterUrls: theaterUrls
    }) 
  }
  render() {  
    return (
        <HomeDiv>
          <ShowDisplay>
            <ShowDisplayImg/>
            <ShowDisplayNavs>
              <ShowDisplayNavArrowBox>
                <ShowDisplayNavArrow>
                  &lsaquo;
                </ShowDisplayNavArrow>
              </ShowDisplayNavArrowBox>
              <ShowDisplayNavArrowBox>
                <ShowDisplayNavArrow>
                  &rsaquo;
                </ShowDisplayNavArrow>
              </ShowDisplayNavArrowBox>
            </ShowDisplayNavs>
            <ShowDisplayText>
              Life and Times - Episodes 4.5 & 5  
            </ShowDisplayText>
          </ShowDisplay>
          <div style={{display:'inline-block',verticalAlign:'top'}}>
            <img src={news} alt='news' style={{width: '70px',marginBottom:'12px'}}/>
            <NewsHeadline>News Item 1</NewsHeadline>
            <NewsHeadline>News Item 2</NewsHeadline>
            <NewsHeadline>News Item 3</NewsHeadline>
            <NewsHeadline>News Item 4</NewsHeadline>
            <NewsHeadline>News Item 5</NewsHeadline>
            <NewsHeadline>News Item 6</NewsHeadline>
            <NewsHeadline>News Item 7</NewsHeadline>
          </div>
        </HomeDiv>
    )
  }
}

const HomeDiv = (props) => (
  <div className='fades' style={{
    paddingTop: '25px',
    height: '600px',
    width: '94vw'
  }} {...props} />
)

const ShowDisplay = (props) => (
  <div className='homeShowDisplay' style={{
    position: 'relative',
    display: 'inline-block',
    border: '3px solid #333333',
    backgroundColor: '#EDEDED',
    boxSizing: 'border-box',
    marginRight: '32px',
    width: '65vw',
    boxShadow: '2px 2px 2px #EDEDED',
    height: 'calc(65vw * .5)'
  }} {...props} />
)

const ShowDisplayImg = (props) => (
  <img className='imgCover' 
    src='https://oktheatersite.files.wordpress.com/2017/11/birds.jpg' 
    alt='displayImg'
    style={{
      position: 'absolute',
      height: '100%',
      width: '100%'
    }} {...props} />
)

const ShowDisplayText = (props) => (
  <div style={{
    position: 'absolute',
    fontSize:'20px',
    fontWeight:'bold',
    color: 'white',
    backgroundColor: '#222222',
    opacity: '0.8',
    paddingLeft: '12px',
    width: 'calc(100% - 12px)',
    height: '34px',
    bottom: '0',
    paddingTop: '6px',
    marginBottom: '-1px'
  }} {...props} />
)

const ShowDisplayNavs = (props) => (
  <div style={{
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    top: 'calc(65vw * 0.19)',
    paddingLeft: '12px',
    paddingRight: '12px',
    height: '70px',
    width: 'calc(100% - 24px)'
  }} {...props} />
)

const ShowDisplayNavArrowBox = (props) => (
  <div className='hoverVisible' style={{
    borderRadius: '10px',
    opacity: '0.8',
    backgroundColor: '#222222',
    height: '70px',
    width: '70px',
  }} {...props} />
)

const ShowDisplayNavArrow = (props) => (
  <span class='showDisplayNavArrow' style={{
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '52px',
    top: '-10px',
    paddingLeft: '25px'
  }} {...props} />
)

const NewsHeadline = (props) => (
  <div style={{
    width: '25vw',
    fontSize: '20px',
    marginLeft:'-14px',
    fontWeight: 'bold',
    marginBottom:'12px',
    paddingLeft: '12px',
    backgroundColor: 'white',
    color: '#333333',
    boxShadow: '2px 2px 2px #EDEDED'
  }} {...props} />
)




export default Home;
