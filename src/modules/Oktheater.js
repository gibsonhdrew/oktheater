import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oktheater from '../images/pagetitles/oktheater.png';
import hr2 from '../images/hr2.png';


class Oktheater extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var posts = []
        var slugs = []
        let data = this.props.wpData
        for (let i=0;i<data.length;i++) {
            if (data[i].tags[0] === 14694) { // wp tag 'theater'
                posts.push(data[i].title.rendered)
                posts.push(data[i].content.rendered)
                slugs.push(data[i].slug)
            }
        }
        this.setState({ 
            postCount: posts.length / 2,
            postSlugs: slugs
        })
        for (var i=0;i<8;i++) { posts.push('') } // buffer 
        this.setState({ 
            bodyPosts: posts 
        })
    }
    render() {  
        if (this.state.postCount <= 4) { var hrImg4 = { opacity: 0 } }
        if (this.state.postCount <= 3) { var hrImg3 = { opacity: 0 } }
        if (this.state.postCount <= 2) { var hrImg2 = { opacity: 0 } }
        if (this.state.postCount <= 1) { var hrImg1 = { opacity: 0 } }
        if (!this.state.bodyPosts)
           return null;

        return (
            <div className='oktBody fades'>
                <img src={oktheater} alt='OK Theater' className='pageTitle'/>

                <Link to={'/oktheater/'+this.state.postSlugs[0]}>
                    <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[0]}}
                    className='postTitle' />
                </Link>
                <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[1]}}/>
                <img src={hr2} alt='-----' style={hrImg1}/>

                <Link to={'/oktheater/'+this.state.postSlugs[1]}>
                    <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[2]}}
                    className='postTitle' />
                </Link>
                <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[3]}}/>
                <img src={hr2} alt='-----' style={hrImg2}/>

                <Link to={'/oktheater/'+this.state.postSlugs[2]}>
                    <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[4]}}
                    className='postTitle' />
                </Link>
                <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[5]}}/>
                <img src={hr2} alt='-----' style={hrImg3}/>

                <Link to={'/oktheater/'+this.state.postSlugs[3]}>
                    <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[6]}}
                    className='postTitle' />
                </Link>
                <p dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[7]}}/>
                <img src={hr2} alt='-----' style={hrImg4}/>
            </div>
        )
    }
}

export default Oktheater;
