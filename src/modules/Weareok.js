import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import about from '../images/about.jpg';
import wereok from '../images/pagetitles/wereok.png';
import contact from '../images/pagetitles/contactus.png';

class Weareok extends Component {
    render() {  
        return (
            <div className='aboutBody fades'>
                <img src={wereok} alt='We&#8217re OK' className='pageTitle'/>
                <br/><br/>
                <img src={about} alt='about' className='aboutPic'/>
                <p>Nature Theater of Oklahoma is an OBIE-Award winning New York performance group under the direction of Pavol Liska and Kelly Copper. Since <i>Poetics: A Ballet Brut</i>, our first dance piece created as an ensemble, Nature Theater of Oklahoma has been devoted to making the work we don’t know how to make, putting ourselves in impossible situations, and working from out of our own ignorance and unease. We strive to create an unsettling live situation that demands total presence from everyone in the room. We use the readymade material around us, found space, overheard speech, and observed gesture, and through extreme formal manipulation, and superhuman effort, we affect in our work a shift in the perception of everyday reality that extends beyond the site of performance and into the world in which we live.</p>
                <div className='whiteBkg'>
                    <p className='pressQuote'>Over the past several years the Nature Theater of Oklahoma has evolved into one of New York’s most talented ensembles... their shows are smart, witty, highly physical, and eager to twist notions of theatricality.</p>
                    <p className='attribution'>-The Village Voice</p>
                    <p className='pressQuote'>At a time when even Off Off Broadway productions seem infatuated with technology and spectacle, [Nature Theater of Oklahoma&#8217;s] bare-bones vision recalls the &quot;poor theater&quot; of the 1970&#8217;s.. the focus is on the young actors&#8217; voices and bodies. They animate the emptiness of the theater with a bravura physicality.</p>  
                    <p className='attribution'>-The New York Times</p>
                    <br/>
                    <Link to='/contacts'><img src={contact} alt='Contact Us' className='contactUs'/></Link>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Weareok;
