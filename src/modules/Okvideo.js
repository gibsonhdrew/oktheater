import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import okvideo from '../images/pagetitles/okvideo.png';
import previous from '../images/previous.png';


class Okvideo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var postTitles = []
        var postThumbnails = []
        var slugs = []
        var currentPosts = []
        var previousPosts = []
        var previousSlugs = []
        let data = this.props.wpData
        let vidImages = []
        let dispPosts = []
        let prevPosts = []
        let vimeoIdOrder = []
        let vimeoResponseVids = []
        let self = this;
        for (let i=0;i<data.length;i++) {
            if (data[i].tags[0] === 412) { // wp tag 'video'
                if (data[i].content.rendered.match('https://www.youtube.com')) {
                  let ytLink = data[i].content.rendered.match('https://www.youtube.com').input
                  ytLink = ytLink.substring(ytLink.indexOf('src')+5,ytLink.indexOf('allowfullscreen')-2)
                  let ytId = ytLink.substring(ytLink.indexOf('embed')+6,ytLink.indexOf('?version')) 
                  let ytImg = 'https://img.youtube.com/vi/'+ytId+'/hqdefault.jpg'
                  vidImages.push(ytImg)
                  postThumbnails.push(ytLink)
                } else if (data[i].content.rendered.match('player.vimeo.com')) {
                  let vimeoLink = data[i].content.rendered.match('player.vimeo.com').input
                  vimeoLink = vimeoLink.substring(vimeoLink.indexOf('src')+5,vimeoLink.indexOf('width')-2)
                  let vimeoID = vimeoLink.substring(vimeoLink.indexOf('video/')+6)
                  let vimeoImg = '' 
                  vidImages.push(vimeoImg)
                  vimeoIdOrder.push({
                    id: vimeoID, 
                    img: ''   
                  })
                  axios.get('https://api.vimeo.com/videos/'+vimeoID+'?fields=pictures.sizes', 
                    { headers: {
                      "Authorization": "Bearer 85f1765d285f41dc5043d4a114384d8c"
                      }
                    })
                    .then(function(response) {
                      console.log(response)
                      vimeoResponseVids.push({
                        id: vimeoID, 
                        img: response.data.pictures.sizes[3].link
                      })
                      for (let b=0;b<vimeoIdOrder.length;b++) {
                        if (vimeoIdOrder[b].img === '') {
                          for (let u=0;u<vimeoResponseVids.length;u++) {
                            if (vimeoResponseVids[u].id === vimeoIdOrder[b].id) {
                              vimeoIdOrder[b].img = vimeoResponseVids[u].img
                              for (let j=0;j<dispPosts.length;j++) {
                                if (dispPosts[j].img === '') {
                                  if (vimeoIdOrder[0].img !== '') {
                                    dispPosts[j].img = vimeoIdOrder[0].img
                                    vimeoIdOrder.shift()
                                    self.setState({
                                      currentPosts: dispPosts,
                                      numberOfPosts: dispPosts.length
                                    })
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })
                  postThumbnails.push(vimeoLink)
                }
                postTitles.push(data[i].title.rendered)
                slugs.push(data[i].slug)
            }
        }
        for (let i=0;i<postThumbnails.length;i++){
            currentPosts.push({title: postTitles[i], video: postThumbnails[i], url: slugs[i], img: vidImages[i]})
        }
        if (postTitles.length > 6) {
            for (let i=6;i<postTitles.length;i++){
                previousPosts.push(postTitles[i])
            }
            for (let i=6;i<slugs.length;i++){
                previousSlugs.push(slugs[i])
            }
        }
        for (let i=0;i<previousPosts.length;i++){
            prevPosts.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        for (let i=0;i<6;i++) {
          dispPosts.push(currentPosts[i])
        }
        this.setState({ 
            currentPosts: dispPosts, 
            previousPostObj: prevPosts
        })
        setTimeout(function(){ 
          console.log("Hello"); 
        }, 3000);
    }
    render() {  
        if (this.state.numberOfPosts < 10) { 
          var prevText = { display: 'none' } 
        } else {
          prevText = { 
            display: 'block', 
            width: '130px' 
          } 
        }
        if (!this.state.currentPosts)
           return null;

        return (
            <div className='oktBody fades'>
                <img src={okvideo} alt='OK Video' className='pageTitle'/>

                <div className='pageBody'>
                    <div className='postGrid' style={{display:'flex',flexWrap:'wrap'}}>
                        { 
                            this.state.currentPosts.map(function(slug, i){
                                return ( 
                                    <div key={i} className='gridMapVideo fades' style={{
                                        backgroundColor:'white',
                                        marginTop:'20px',
                                        marginRight:'15px'
                                    }}>
                                      <Link key={i} to={'/okvideo/'+slug.url}>
                                          <img src={slug.img} alt='img' style={{
                                              border:'0px',
                                              height:'100%',
                                              width:'100%',
                                              objectFit:'cover'
                                          }}/>
                                          <p key={i} style={{
                                              color:'white',
                                              width:'calc(100% - 2px)', 
                                              height: '30px',
                                              marginTop: '-38px',
                                              paddingTop: '8px',
                                              backgroundColor: '#222222',
                                              opacity:'0.8', 
                                              fontWeight:'bold'
                                          }} dangerouslySetInnerHTML={{ __html: slug.title}}/>
                                      </Link> 
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br/>
                    <br/>
                    <img src={previous} alt='Previous:' style={prevText} className='pageTitle'/>
                    <div>
                        { 
                            this.state.previousPostObj.map(function(slug, i){
                                return ( 
                                    <Link key={i} to={'/okvideo/'+slug.slug}>
                                        <p className='previousLink' key={i} dangerouslySetInnerHTML={{ __html: slug.post}}/>
                                    </Link> 
                                )
                            })
                        }
                    </div>
                    <br/><br/>
                </div>
            </div>
        )
    }
}

export default Okvideo;
