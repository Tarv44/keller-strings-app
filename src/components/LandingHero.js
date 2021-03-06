import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "./styled/Button";
import Carousel from "./Carousel";

const LandingHero = () => {
  const Card1 = (
    <Card
      imgSml={
        "//images.ctfassets.net/j43gpj14xyuu/5fzWnG69O8uR1CSrJYHGxT/02b462416a55cc000536c180ceb0b1f8/violins-sml.png?w=800&q=50&fm=webp"
      }
      imgLrg={
        "//images.ctfassets.net/j43gpj14xyuu/anUshzXPB2vN0pte2SZwe/d3487255f0a7fdcf6ff0235fe5ff9feb/violins-lrg.png?w=800&q=50&fm=webp"
      }
    >
      <Container1>
        <Div1>
          <h1>New Orleans' Violin Shop</h1>
          <p>
            <em>
              Offering professional service & sales of violin family instruments
              since 1975.
            </em>
          </p>
          <Btn as={Link}>Come Visit Us!</Btn>
        </Div1>
      </Container1>
    </Card>
  );

  const cards = [Card1];

  return (
    <Hero>
      <Carousel
        cards={cards}
        // autoplay={true}
      />
    </Hero>
  );
};
export default LandingHero;

const Hero = styled.div`
  max-width: 100%;
  position: relative;
  top: -5px;
  margin-bottom: 36px;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    padding-top: 25px;
    margin-bottom: 70px;
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 100px;
  }
`;

const Card = styled.div`
  background: ${(props) => `url(${props.imgSml}) no-repeat`};
  background-size: cover;
  background-position: center;
  height: 475px;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    background: ${(props) => `url(${props.imgLrg}) no-repeat`};
    background-size: cover;
    height: 535px;
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    height: 624px;
  }
`;

const Container1 = styled.div`
  padding: 0 37px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    padding: 0 0 25px;
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    padding: 25px;
  }
`;

const Div1 = styled.div`
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  p {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 30px 25px 25px;
    h1 {
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 20px;
    }
    h1,
    p {
      text-align: left;
    }
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
    h1 {
      font-size: 50px;
    }
  }
`;

const Btn = styled(Button)`
  width: 250px;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
