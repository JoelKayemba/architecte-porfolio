// src/components/SectionGalerie.js
import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';

const Wrapper = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #151918;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 40px;
  margin-top: 60px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 40px;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
  gap: 20px;
  padding: 0 20px 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px 40px;
  }
`;


const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .text {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 20px;
  }

  .side-label {
    position: absolute;
    z-index: 2;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    left: 15px;
    bottom: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
  }

  .navigation {
    position: absolute;
    z-index: 2;
    top: 20px;
    font-size: 13px;
    color: white;
  }

  .prev {
    left: 20px;
  }

  .next {
    right: 20px;
  }
`;

const SectionGalerie = () => {
  const projets = [
    {
      bg: img1,
      title: "Résidence médicale à Paris",
      label: "← PRÉC.",
    },
    {
      bg: img2,
      title: "Appartement moderne",
      label: "",
    },
    {
      bg: img3,
      title: "Salle de concert à New York",
      label: "",
    },
    {
      bg: img4,
      title: "Hôtel design à Londres",
      label: "SUIV. →",
    },
  ];

  return (
    <Wrapper>
      <Title>Notre galerie d'images</Title>
      <Section>
        {projets.map((proj, index) => (
          <Card key={index} bg={proj.bg}>
            <div className="text">{proj.title}</div>
            <div className="side-label">ARCHITECTURE</div>
            {proj.label && (
              <div className={`navigation ${index === 0 ? 'prev' : 'next'}`}>
                {proj.label}
              </div>
            )}
          </Card>
        ))}
      </Section>
    </Wrapper>
  );
};

export default SectionGalerie;
