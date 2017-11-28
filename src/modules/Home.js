import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import news from '../images/news.png';


class Home extends Component {
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
            if (data[i].tags[0] === 103) { // wp tag 'news'
                posts.push(data[i].title.rendered)
                posts.push(data[i].content.rendered)
                slugs.push(data[i].slug)
            }
        }
        this.setState({ 
            postCount: posts.length / 2,
            postSlugs: slugs
        })
        if (posts.length > 1) {
            for (let i=2;i<posts.length;i+=2){
                previousPosts.push(posts[i])
            }
            for (let i=1;i<slugs.length;i++){
                previousSlugs.push(slugs[i])
            }
        }
        var thumbPosts = []
        var newsPosts = []
        for (let i=0;i<4;i++){
            thumbPosts.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        for (let i=4;i<previousPosts.length;i++){
            newsPosts.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        this.setState({
            newsListObj: newsPosts
        })
        for (let i=0;i<8;i++) { posts.push('') } // buffer 
        let imgArray = posts[1].match('data-orig-file=\\"https://(.*).jpg?')[0].split(' ')
        let imgUrl = imgArray[imgArray.length-1]
        this.setState({ 
            bodyPosts: posts, 
            featuredImg: imgUrl
        })
    }
    render() {  
        if (!this.state.bodyPosts)
           return null;

        return (
            <div className='homeBody fades'>

                <div className='homeTop'>
                    <div className='featuredBox'>
                        <Link to={'/news/'+this.state.postSlugs[0]}>
                            <img src={this.state.featuredImg} className='homeImg' alt='homeImage'/>
                            <h1 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[0]}}
                                className='featuredTitle postTitle' />
                        </Link>
                        <div className='thumbDiv'>
                        </div>
                    </div>
                    <div className='newsBox'>
                        <img src={news} className='pageTitle' alt='News:'/>
                        <div>
                            { 
                                this.state.newsListObj.map(function(slug, i){
                                    return ( 
                                        <Link key={i} to={'/news/'+slug.slug}>
                                            <p key={i} dangerouslySetInnerHTML={{ __html: slug.post}}/>
                                        </Link> 
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <br/><br/>
            </div>
        )
    }
}

export default Home;
