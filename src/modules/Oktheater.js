import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oktheater from '../images/pagetitles/oktheater.png';
import previous from '../images/previous.png';


class Oktheater extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var postTitles = []
        var postImages = []
        var slugs = []
        var currentPosts = []
        var previousPosts = []
        var previousSlugs = []
        let data = this.props.wpData
        for (let i=0;i<data.length;i++) {
            if (data[i].tags[0] === 14694) { // wp tag 'theater'
                postTitles.push(data[i].title.rendered)
                slugs.push(data[i].slug)
                let imgArray = data[i].content.rendered.match('data-orig-file=\\"https://(.*).jpg')[0].split(' ')
                postImages.push(imgArray[imgArray.length-1])
            }
        }
        for (let i=0;i<postImages.length;i++){
            currentPosts.push({title: postTitles[i], img: postImages[i], url: slugs[i]})
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
                <img src={oktheater} alt='OK Theater' className='pageTitle'/>

                <div className='pageBody'>
                    <div className='postGrid' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                        { 
                            this.state.currentPosts.map(function(slug, i){
                                return ( 
                                    <div className='gridMap' style={{backgroundColor:'white',marginTop:'20px'}}>
                                      <Link key={i} to={'/oktheater/'+slug.url}>
                                          <img src={slug.img} alt='Img' style={{height: '84%',objectFit:'cover'}}/>
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
                                    <Link key={i} to={'/oktheater/'+slug.slug}>
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

export default Oktheater;
