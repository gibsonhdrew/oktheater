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
        var postsTh = []
        var slugs = []
        var slugsTh = []
        var previousPosts = []
        var previousPostsTh = []
        var previousSlugs = []
        var previousSlugsTh = []
        let data = this.props.wpData
        for (let i=0;i<data.length;i++) {
            if (data[i].tags[0] === 103) { // wp tag 'news'
                posts.push(data[i].title.rendered)
                posts.push(data[i].content.rendered)
                slugs.push(data[i].slug)
            }
            if (data[i].tags[0] === 14694) { // wp tag 'theater'
                postsTh.push(data[i].title.rendered)
                postsTh.push(data[i].content.rendered)
                slugsTh.push(data[i].slug)
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
        if (postsTh.length > 1) {
            for (let i=0;i<postsTh.length;i+=2){
                previousPostsTh.push(postsTh[i])
            }
            for (let i=0;i<slugsTh.length;i++){
                previousSlugsTh.push(slugsTh[i])
            }
        }
        var thumbPosts = []
        var newsPosts = []
        let imgArray = posts[1].match('data-orig-file=\\"https://(.*).jpg?')[0].split(' ')
        let imgUrl = imgArray[imgArray.length-1]

        var thumbImgUrlsTh = []
        let imgArray1Th = postsTh[1].match('data-orig-file=\\"https://(.*).jpg?')[0].split(' ')
        thumbImgUrlsTh.push(imgArray1Th[imgArray1Th.length-1].replace('src="','').replace('data-orig-file="', ''));
        let imgArray2Th = postsTh[3].match('data-orig-file=\\"https://(.*).jpg?')[0].split(' ')
        thumbImgUrlsTh.push(imgArray2Th[imgArray2Th.length-1].replace('src="','').replace('data-orig-file="', ''));
        let imgArray3Th = postsTh[5].match('data-orig-file=\\"https://(.*).jpg?')[0].split(' ')
        thumbImgUrlsTh.push(imgArray3Th[imgArray3Th.length-1].replace('src="','').replace('data-orig-file="', ''));
        let imgArray4Th = postsTh[7].match('data-orig-file=\\"https://(.*).jpg?')[0].split(' ')
        thumbImgUrlsTh.push(imgArray4Th[imgArray4Th.length-1].replace('src="','').replace('data-orig-file="', ''));
 
        for (let i=0;i<3;i++){
            thumbPosts.push({post: previousPostsTh[i], slug: previousSlugsTh[i], img: thumbImgUrlsTh[i]})
        }
        for (let i=0;i<8;i++){
            newsPosts.push({post: previousPosts[i], slug: previousSlugs[i]})
        }
        this.setState({ 
            bodyPosts: posts, 
            featuredImg: imgUrl,
            thumbListObj: thumbPosts,
            newsListObj: newsPosts
        })
        for (let i=0;i<8;i++) { posts.push('') } // buffer 
    }
    render() {  
        if (!this.state.bodyPosts)
           return null;

        return (
            <div className='homeBody fades'>

                <div className='homeTop'>
                    <div className='featuredBox'>
                        <Link className='featuredHover' to={'/news/'+this.state.postSlugs[0]}>
                            <img src={this.state.featuredImg} className='homeImg' alt='homeImage'/>
                            <div className='featuredTitle'>
                                <h3 dangerouslySetInnerHTML={{ __html: this.state.bodyPosts[0]}}/>
                            </div>
                        </Link>
                        <div className='thumbDiv'>
                            { 
                                this.state.thumbListObj.map(function(slug, i){
                                    return ( 
                                        <Link className='thumb' key={i} to={'/news/'+slug.slug}>
                                            <img key={i} src={slug.img} className='thumbImg' alt='thumbImage'/>
                                            <div className='thumbTitle'>
                                                <h3 key={i} dangerouslySetInnerHTML={{ __html: slug.post}}/>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='newsBox'>
                        <img src={news} className='newsTitle' alt='News:'/>
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
