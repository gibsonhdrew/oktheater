import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import about from '../images/about.jpg';
import wereok from '../images/pagetitles/wereok.png';
import contact from '../images/pagetitles/contactus.png';
import villagevoice from '../images/blurbs/villagevoice.png';
import hr2 from '../images/hr2.png';
import hr3 from '../images/hr3.png';
import nyt from '../images/blurbs/nyt.png';

class Weareok extends Component {
    render() {  
        return (
            <div className='aboutBody fades'>
                <img src={wereok} alt='We&#8217re OK' className='pageTitle'/>
                <br/><br/>
                <img src={about} alt='about' className='aboutPic'/>
                <p>Nature Theater of Oklahoma is an OBIE-Award winning New York performance group under the direction of Pavol Liska and Kelly Copper. Since <i>Poetics: A Ballet Brut</i>, our first dance piece created as an ensemble, Nature Theater of Oklahoma has been devoted to making the work we don’t know how to make, putting ourselves in impossible situations, and working from out of our own ignorance and unease. We strive to create an unsettling live situation that demands total presence from everyone in the room. We use the readymade material around us, found space, overheard speech, and observed gesture, and through extreme formal manipulation, and superhuman effort, we affect in our work a shift in the perception of everyday reality that extends beyond the site of performance and into the world in which we live.</p>
                <div className='aboutHrs'>
                    <img src={hr3} alt='----' className='hr3' />
                    <img src={hr2} alt='----' className='hr2' />
                </div>
                <img className='pressQuote villagevoice' src={villagevoice} alt='quote'/>
                <img className='pressQuote nyt' src={nyt} alt='quote'/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Weareok;
