import React from "react";
import styled from "styled-components";
import image from "./img/home.jpg";
import stripe from "./img/line.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Shape xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#46FFD3"
          fillOpacity="1"
          d="M0,256L60,266.7C120,277,240,299,360,256C480,213,600,107,720,96C840,85,960,171,1080,170.7C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </Shape>
      <ShapeExtension></ShapeExtension>
      <Content>
        <Text>
          <TopHeader>BEST ONLINE STORE OF THE YEAR</TopHeader>
          <HeaderContainer>
            <Header>We don't do fashion, we are fashion</Header>
            <Stripe src={stripe} />
          </HeaderContainer>
          <StyledLink to="/products">
            <Button>Shop now</Button>
          </StyledLink>
        </Text>
        <ImageContainer>
          <Image src={image} alt="models" />
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundgrey};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start-flex;
  height: 100vh;
`;

const Shape = styled.svg`
  position: absolute;
  bottom: 40px;
  left: 0px;
  @media (max-width: 1250px) {
    bottom: 80px;
  }
  @media (max-width: 1150px) {
    bottom: 120px;
  }
  @media (max-width: 1000px) {
    bottom: 160px;
  }
`;

const ShapeExtension = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  @media (max-width: 1250px) {
    height: 80px;
  }
  @media (max-width: 1150px) {
    height: 120px;
  }
  @media (max-width: 1000px) {
    height: 160px;
  }
`;

const Content = styled.div`
  height: 50vh;
  width: min(1100px, 85%);
  margin: 80px 10px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 1000px) {
    margin: 0px;
    width: 100%;
    height: 60vh;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    background: rgba(249, 249, 2549, 0.7);
    align-items: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const TopHeader = styled.div`
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.fontgrey};
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 1100px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const Header = styled.div`
  font-size: 60px;
  max-width: 500px;
  font-weight: 900;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1200px) {
    font-size: 55px;
  }
  @media (max-width: 1100px) {
    font-size: 50px;
  }
  @media (max-width: 1000px) {
    text-align: center;
    padding: 15px;
  }
  @media (max-width: 600px) {
    font-size: 45px;
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const Stripe = styled.img`
  width: 210px;
  @media (max-width: 1200px) {
    width: 190px;
  }
  @media (max-width: 1100px) {
    width: 170px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Button = styled.div`
  margin-top: 10px;
  font-size: 36px;
  padding: 18px 72px;
  width: fit-content;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  border-radius: 36px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blackHover};
  }
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  @media (max-width: 1100px) {
    font-size: 28px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

const Image = styled.img`
  width: 600px;

  @media (max-width: 1250px) {
    width: 550px;
  }

  @media (max-width: 1130px) {
    width: 500px;
  }

  @media (max-width: 1050px) {
    width: 450px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
