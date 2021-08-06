import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: this.props.autoplay,
      autoplaySpeed: 3000,
      appendDots: dots => (
        <DotsContainer>
          <Dots style={{ margin: "0px" }}>
            <Arrow onClick={this.previous}><AiFillCaretLeft size={20}/></Arrow> 
            {dots} 
            <Arrow onClick={this.next}><AiFillCaretRight size={20}/></Arrow>
          </Dots>
        </DotsContainer>
      )
    }
  
    const mobileSettings = {
      ...settings,
      arrows: false
    }
    return (
      <>
        <Slider ref={c => (this.slider = c)} {...mobileSettings}>
          {this.props.cards}
        </Slider>
      </>
    );
  }
};

export default Carousel;

const Arrow = styled.button`
  display: none;
  path {
    color: var(--color-primary);
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    display: block;
  }
`

const Dots = styled.ul`
  display: flex;
  align-items: center;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`