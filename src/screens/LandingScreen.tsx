import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import moviePic from '../assets/images/movies_pic.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2000
});

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <MainContainer data-aos="zoom-in-down">
      <Container data-aos="zoom-in-down">
        <Title data-aos="zoom-in-down">Movie Discovery App</Title>
        <Description data-aos="zoom-in-down">
          Search for movies, view movie details and save favorite movies to the collection
        </Description>
        <Button text="Search" onClick={() => navigate('/movies')} />
      </Container>
    </MainContainer>
  );
};

export default LandingScreen;

const MainContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url(${moviePic});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  background: rgb(0 0 0 / 62%);
`;

const Title = styled.h1`
  text-shadow: rgba(255, 255, 255, 0.77) 2px 1px 3px;
`;

const Description = styled.h3`
  text-shadow: rgba(255, 255, 255, 0.77) 2px 1px 3px;
`;
