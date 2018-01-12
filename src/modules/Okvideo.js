import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import okvideo from '../images/pagetitles/okvideo.png';
import hr2 from '../images/hr2.png';
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
        let vimeoImgIndex = 0
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
                  vimeoImgIndex +=1
                  vimeoIdOrder.push(vimeoID)
                  axios.get('http://vimeo.com/api/v2/video/'+vimeoID+'.json')
                    .then(function(response) {
                      vimeoResponseVids.push({index: vimeoImgIndex, image: response.data[0].thumbnail_large})
                      if (response.data[0].id == vimeoIdOrder[0]) {
                        for (let j=0;j<dispPosts.length;j++) {
                          if (dispPosts[j].img==='') {
                            if (vimeoResponseVids[0]) {
                              dispPosts[j].img = vimeoResponseVids[0].image
                              vimeoResponseVids.shift()
                            }
                          }
                          self.setState({ 
                              currentPosts: dispPosts,
                              numberOfPosts: dispPosts.length
                          })
                        }
                        vimeoIdOrder.shift();
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
        if (postTitles.length > 9) {
            for (let i=9;i<postTitles.length;i++){
                previousPosts.push(postTitles[i])
            }
            for (let i=9;i<slugs.length;i++){
                previousSlugs.push(slugs[i])
            }
        }
        for (let i=0;i<previousPosts.length;i++){
            prevPosts.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        for (let i=0;i<9;i++) {
          dispPosts.push(currentPosts[i])
        }
        this.setState({ 
            currentPosts: dispPosts, 
            previousPostObj: prevPosts
        })
    }
    render() {  
        if (this.state.numberOfPosts < 10) { 
          var hrImg4 = { display: 'none' } 
          var prevText = { display: 'none' } 
        } else {
          hrImg4 = { opacity: 1, width:'50em' } 
          prevText = { 
            opacity: '1', 
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
                                    <div key={i} className='gridMapVideo fades' style={{backgroundColor:'white',marginTop:'20px',marginRight:'15px'}}>
                                      <Link key={i} to={'/okvideo/'+slug.url}>
                                          <img src={slug.img} alt='img' style={{border:'0px',height:'80%',width:'100%',objectFit:'cover'}}/>
                                          <p key={i} style={{color:'#222222',marginLeft:'4px',fontWeight:'bold'}} dangerouslySetInnerHTML={{ __html: slug.title}}/>
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
