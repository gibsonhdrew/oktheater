import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hr2 from '../images/hr2.png';
import previous from '../images/previous.png';


class Okmoto extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var posts = []
        var slugs = []
        var previousPosts = []
        var previousSlugs = []
        let data = this.props.wpData
        for (let i=0;i<data.length;i++) {
            if (data[i].tags[0] === 13936) { // wp tag 'moto'
                posts.push(data[i].title.rendered)
                posts.push(data[i].content.rendered)
                slugs.push(data[i].slug)
            }
        }
        this.setState({ 
            postCount: posts.length / 2,
            postSlugs: slugs
        })
        if (posts.length > 8) {
            for (let i=8;i<posts.length;i+=2){
                previousPosts.push(posts[i])
            }
            for (let i=4;i<slugs.length;i++){
                previousSlugs.push(slugs[i])
            }
        }
        var postSlugs = []
        for (let i=0;i<previousPosts.length;i++){
            postSlugs.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        this.setState({
            previousPostObj: postSlugs
        })
        for (let i=0;i<8;i++) { posts.push('') } // buffer 
        this.setState({ 
            bodyPosts: posts 
        })
    }
    render() {  
        if (this.state.postCount <= 4) { var hrImg4 = { display: 'none' } }
        if (this.state.postCount <= 3) { var hrImg3 = { display: 'none' } }
        if (this.state.postCount <= 2) { var hrImg2 = { display: 'none' } }
        if (this.state.postCount <= 1) { var hrImg1 = { display: 'none' } }
        if (!this.state.bodyPosts)
           return null;

        return (
            <div className='oktBody fades'>

                <div className='pageBody'>
                    <Link to={'/okmoto/'+this.state.postSlugs[0]}>
                        <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[0]}}
                        className='postTitle' />
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[1]}}/>
                    <div style={hrImg1}>
                    <br/>
                      <img src={hr2} alt='-----' style={hrImg1}/>
                      <br/>
                    </div>

                    <Link to={'/okmoto/'+this.state.postSlugs[1]}>
                        <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[2]}}
                        className='postTitle' />
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[3]}}/>
                    <div style={hrImg1}>
                      <br/>
                      <img src={hr2} alt='-----' style={hrImg2}/>
                      <br/>
                    </div>

                    <Link to={'/okmoto/'+this.state.postSlugs[2]}>
                        <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[4]}}
                        className='postTitle' />
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[5]}}/>
                    <div style={hrImg1}>
                      <br/>
                      <img src={hr2} alt='-----' style={hrImg3}/>
                      <br/>
                    </div>

                    <Link to={'/okmoto/'+this.state.postSlugs[3]}>
                        <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[6]}}
                        className='postTitle' />
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[7]}}/>
                    <div style={hrImg1}>
                      <br/>
                      <img src={hr2} alt='-----' style={hrImg4}/>
                      <br/>
                    </div>

                    <img src={previous} alt='Previous:' style={hrImg4} className='pageTitle'/>
                    <div>
                        { 
                            this.state.previousPostObj.map(function(slug, i){
                                return ( 
                                    <Link key={i} to={'/okmoto/'+slug.slug}>
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

export default Okmoto;
