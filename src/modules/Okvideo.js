import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import okvideo from '../images/pagetitles/okvideo.png';


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
        for (let i=0;i<data.length;i++) {
            if (data[i].tags[0] === 412) { // wp tag 'video'
                if (data[i].content.rendered.match('https://www.youtube.com')) {
                  let ytLink = data[i].content.rendered.match('https://www.youtube.com').input
                  ytLink = ytLink.substring(ytLink.indexOf('src')+5,ytLink.indexOf('allowfullscreen')-2)
                  postThumbnails.push(ytLink)
                } else if (data[i].content.rendered.match('http://player.vimeo.com')) {
                  let vimeoLink = data[i].content.rendered.match('http://player.vimeo.com').input
                  vimeoLink = vimeoLink.substring(vimeoLink.indexOf('src')+5,vimeoLink.indexOf('width')-2)
                  console.log(vimeoLink)
                  postThumbnails.push(vimeoLink)
                } else if (data[i].content.rendered.match('https://player.vimeo.com')) {
                  let vimeoLink = data[i].content.rendered.match('https://player.vimeo.com').input
                  vimeoLink = vimeoLink.substring(vimeoLink.indexOf('src')+5,vimeoLink.indexOf('width')-2)
                  console.log(vimeoLink)
                  postThumbnails.push(vimeoLink)
                }
                postTitles.push(data[i].title.rendered)
                slugs.push(data[i].slug)
            }
        }
        for (let i=0;i<postThumbnails.length;i++){
            currentPosts.push({title: postTitles[i], video: postThumbnails[i], url: slugs[i]})
        }
        if (postTitles.length > 4) {
            for (let i=16;i<postTitles.length;i++){
                previousPosts.push(postTitles[i])
            }
            for (let i=16;i<slugs.length;i++){
                previousSlugs.push(slugs[i])
            }
        }
        var prevPosts = []
        for (let i=0;i<previousPosts.length;i++){
            prevPosts.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        this.setState({ 
            currentPosts: currentPosts, 
            previousPostObj: prevPosts
        })
    }
    render() {  
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
                                    <div key={i} className='gridMapVideo' style={{backgroundColor:'white',marginTop:'20px',marginRight:'15px'}}>
                                      <Link key={i} to={'/okvideo/'+slug.url}>
                                          <iframe title='vid' src={slug.video} style={{border:'0px',height:'80%',width:'99.8%',objectFit:'cover'}}/>
                                          <p key={i} style={{color:'#222222',marginLeft:'4px',fontWeight:'bold'}} dangerouslySetInnerHTML={{ __html: slug.title}}/>
                                      </Link> 
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br/>
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
