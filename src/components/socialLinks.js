import React from 'react';
import gitHubLogo from '../assets/images/github.png';
import linkedInLogo from '../assets/images/linkedin.png';
import twitterLogo from '../assets/images/twitter.png';

const SocialLinks = () => {
    const gitHub = "https://github.com/ColtenVanTussenbrook";
    const linkedIn = "https://www.linkedin.com/in/coltenvantussenbrook";
    const twitter = "https://twitter.com/coltvant";

    return (
        <ul>
        <a href={gitHub} target="blank">
            <li className="text-1xl md:text-2xl hover:underline pr-8 md:pr-12 pb-3 inline-block md:block">
                <span className="inline-flex mr-2 underline hidden md:inline">GitHub</span> 
                <span className="inline-flex h-full"><img src={gitHubLogo} alt="GitHub Logo" /></span>
            </li>
        </a>
        <a href={linkedIn} target="blank">
            <li className="text-1xl md:text-2xl hover:underline pr-8 md:pr-12 pb-3 inline-block md:block">
                <span className="inline-flex mr-2 underline hidden md:inline">LinkedIn</span> 
                <span className="inline-flex h-full pt-1"><img src={linkedInLogo} alt="LinkedIn Logo" /></span>
            </li>
        </a>
        <a href={twitter} target="blank">
            <li className="text-1xl md:text-2xl hover:underline pr-8 md:pr-12 pb-3 inline-block md:block">
                <span className="inline-flex mr-2 underline hidden md:inline">Twitter</span> 
                <span className="inline-flex h-full pt-1"><img src={twitterLogo} alt="Twitter Logo" /></span>
            </li>
        </a>
        </ul>
    );
}

export default SocialLinks;
