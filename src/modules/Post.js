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
            backTo = '/news'
        }
        this.setState({
            route: keyword,
            backToLink: backTo
        })
        for (let i=0;i<data.length;i++){
            if (data[i].slug === keyword) {
                let year = data[i].date.substring(0,4)
                let month = data[i].date.substring(5,7).replace(/^0+/, '')
                if (month === '1') {
                    month = 'January'
                } else if (month === '2') {
                    month = 'February'
                } else if (month === '3') {
                    month = 'March'
                } else if (month === '4') {
                    month = 'April'
                } else if (month === '5') {
                    month = 'May'
                } else if (month === '6') {
                    month = 'June'
                } else if (month === '7') {
                    month = 'July'
                } else if (month === '8') {
                    month = 'August'
                } else if (month === '9') {
                    month = 'September'
                } else if (month === '10') {
                    month = 'October'
                } else if (month === '11') {
                    month = 'November'
                } else if (month === '12') {
                    month = 'December'
                }
                let day = data[i].date.substring(8,10).replace(/^0+/, '')
                this.setState({
                    postTitle : data[i].title.rendered,
                    postText : data[i].content.rendered,
                    postDate : month+' '+day+', '+year
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
                    <h4 dangerouslySetInnerHTML={{ __html: this.state.postDate}}
                        className='postDate' />
                    <p dangerouslySetInnerHTML={{ __html: this.state.postText}}/>
                    <br/>
                </div>
                <br/>
                <Link to={this.state.backToLink+'/'}>
                    <img src={back} alt='back' className='backButton'/>
                </Link>
                <br/>   
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Post;
