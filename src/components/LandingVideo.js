import React, { useState } from 'react';
import PlaceholderSml from '../images/landing-video-382.png';
import PlaceholderMed from '../images/landing-video-775.png';
import PlaceholderLrg from '../images/landing-video-1240.png';
import PlaceholderLrg2x from '../images/landing-video-1860.png';
import styled from 'styled-components';

const LandingVideo = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoaded && (
        <div onClick={() => setIsLoaded(true)}>
          <img 
            src={PlaceholderSml} 
            srcSet={`
              ${PlaceholderSml} 382w, 
              ${PlaceholderMed} 775w,
              ${PlaceholderLrg} 1240w,
              ${PlaceholderLrg2x} 1860w,
            `} 
            alt={'Introduction video'} />
        </div>
      )}
      {isLoaded && <Iframe 
      src="https://www.youtube.com/embed/lbMAGW6n2ic"
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen />}
    </>
  );
};

export default LandingVideo;

const Iframe = styled.iframe`
  width: 100%;
  height: 216px;
  @media (min-width: 481px) {
    height: 326.75px;
  }
  @media (min-width: 768px) {
    height: 437.5px;
  }
  @media (min-width: 1025px) {
    height: 568.75px;
  }
  @media (min-width: 1200px) {
    height: 700px;
  }
`