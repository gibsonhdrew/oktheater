import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import back from '../images/back.png';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        let data = this.props.wpData
        var backTo;
        var keyword = this.props.location.pathname
            .replace('/oktheater/','')
            .replace('/okvideo/','')
            .replace('/okradio/','')
            .replace('/okbooks/','')
            .replace('/news/','')
        //refactor the following when you get the chance
        if (this.props.location.pathname.includes('/oktheater/')) {
            backTo = '/oktheater'
        }
        if (this.props.location.pathname.includes('/okvideo/')) {
            backTo = '/okvideo'
        }
        if (this.props.location.pathname.includes('/okradio/')) {
            backTo = '/okradio'
        }
        if (this.props.location.pathname.includes('/okbooks/')) {
            backTo = '/okbooks'
        }
        if (this.props.location.pathname.includes('/news/')) {
            backTo = ''
        }
        this.setState({
            route: keyword,
            backToLink: backTo
        })
        for (let i=0;i<data.length;i++){
            if (data[i].slug === keyword) {
                this.setState({
                    postTitle : data[i].title.rendered,
                    postText : data[i].content.rendered
                })
            }
        }
    }   
    render() {  
        return (
            <div className='oktBody fades'>
                <div className='pageBody'>
                    <h1 dangerouslySetInnerHTML={{ __html: this.state.postTitle}}
                        className='postTitle' />
                    <p dangerouslySetInnerHTML={{ __html: this.state.postText}}/>
                    <br/>
                </div>
                <Link to={this.state.backToLink+'/'}>
                    <img src={back} alt='back' className='backButton'/>
                </Link>
                <br/>   
                <br/>
            </div>
        )
    }
}

export default Post;
