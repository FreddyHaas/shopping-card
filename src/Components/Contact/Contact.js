import React from "react";
import styled from "styled-components";
import {
  BsFacebook,
  BsTwitter,
  BsMessenger,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

const Contact = () => {
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
      <IconContainer>
        <Link href="https://www.youtube.com/watch?v=bAWC1YKiBWE">
          <BsGithub fontSize="7vh" color="black" />
        </Link>
        <Link href="https://www.youtube.com/watch?v=bAWC1YKiBWE">
          <BsFacebook fontSize="7vh" color="black" />
        </Link>
        <Link href="https://www.youtube.com/watch?v=bAWC1YKiBWE">
          <BsTwitter fontSize="7vh" color="black" />
        </Link>
        <Link href="https://www.youtube.com/watch?v=bAWC1YKiBWE">
          <BsMessenger fontSize="7vh" color="black" />
        </Link>
        <Link href="https://www.youtube.com/watch?v=bAWC1YKiBWE">
          <BsInstagram fontSize="7vh" color="black" />
        </Link>
      </IconContainer>
      <AddressContainer>
        <Name>FakeStore</Name>
        <Address>Rodeo Drive 42, Los Angeles USA</Address>
      </AddressContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundgrey};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  @media (max-width: 800px) {
    gap: 40px;
  }
`;
const Shape = styled.svg`
  position: absolute;
  bottom: 40px;
  left: 0px;
`;

const ShapeExtension = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.turquoise};
`;

const IconContainer = styled.div`
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  gap: 80px;
  @media (max-width: 800px) {
    margin-top: 20px;
    flex-direction: column;
    gap: 20px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 30px;
  font-weight: 900;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
`;

const Address = styled.div`
  text-align: center;
  padding: 5px;
  background: none;
  z-index: 1;
`;

export default Contact;
