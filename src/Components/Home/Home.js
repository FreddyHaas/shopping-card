import React from 'react';
import styled from 'styled-components';
import image from './img/home.jpg';
import stripe from './img/line.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Shape xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#46FFD3" fillOpacity="1" d="M0,256L60,266.7C120,277,240,299,360,256C480,213,600,107,720,96C840,85,960,171,1080,170.7C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </Shape>
            <ShapeExtension></ShapeExtension>
            <Content>
                <Text>
                    <TopHeader>BEST ONLINE STORE OF THE YEAR</TopHeader>
                    <HeaderContainer>
                        <Header>We don't do fashion, we are fashion</Header>
                        <Stripe src={stripe}/>
                    </HeaderContainer>
                    <StyledLink to='/products'>
                        <Button>Shop now</Button>
                    </StyledLink>
                </Text>
                <ImageContainer>
                    <Image src={image} alt='models'/>
                </ImageContainer>
            </Content>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    background-color: ${({theme}) => theme.colors.backgroundgrey};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start-flex;
    height: 100vh;
`

const Shape = styled.svg`
    position: absolute;
    bottom: 40px;
    left: 0px;
`

const ShapeExtension = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 40px;
    background-color: ${({theme}) => theme.colors.turquoise};
`

const Content = styled.div`
    margin-top: 80px;
    height: 50vh;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`
const Text = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 20px;
`

const ImageContainer = styled.div`
    height: 100%
`

const TopHeader = styled.div`
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 2px;
    color: ${({theme}) => theme.colors.fontgrey};
`
const Header = styled.div`
    font-size: 60px;
    max-width: 500px;
    font-weight: 900;
    line-height: 1.5;
    color: ${({theme}) => theme.colors.black};
`

const Stripe = styled.img`
    width: 210px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Button = styled.div`
    margin-top: 10px;
    font-size: 36px;
    padding: 18px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.black};
    width: 320px;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    &:hover {
        background-color: ${({theme}) => theme.colors.blackHover};
    }
`
const Image = styled.img`
    max-width: min(40vw, 600px);
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`