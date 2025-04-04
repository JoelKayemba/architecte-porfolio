import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heros from '../assets/images/heros.jpg';
import ProjetSections from '../components/ProjetSections';
import SectionExperience from '../components/SectionExperience';
import SectionGalerie from '../components/SectionGalerie';
import SectionContact from '../components/SectionContact';



const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${heros});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 60px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 30px;
    text-align: center;
    justify-content: center;
  }
`;

const Content = styled(motion.div)`
  color: #fff;
  max-width: 600px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    color: #F1F1F1;
  }

  button {
    padding: 12px 20px;
    background-color:rgb(255, 255, 255);
    color: #151918;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #151918;
      color: #F1F1F1;
    }
  }
`;

const Accueil = () => {
  return (
    <div>
    <HeroSection>
      <Content
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Nous savons à quoi ressemble le bâtiment parfait</h1>
        <p>Pour ceux qui veulent avoir un impact avec le design, là où des gens concentrés livrent l'extraordinaire.</p>
        <button>Obtenir un devis</button>
      </Content>
      

        </HeroSection>
        <DeuxiemeSection />
        <ProjetSections />
        <SectionExperience />
        <SectionGalerie />
        <SectionContact />
    </div>

  );
};


const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 60px;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 60px 30px;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  padding-right: 40px;

  h2 {
    font-size: 36px;
    color: #151918;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #404444;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const ImageContent = styled(motion.div)`
  flex: 1;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const DeuxiemeSection = () => {
  return (
    <SectionContainer>
      <TextContent
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Créer des espaces qui inspirent</h2>
        <p>
          Chaque bâtiment raconte une histoire. En tant qu’architecte, je conçois des espaces où l’esthétique rencontre la fonctionnalité, et où chaque détail compte. Mon objectif est de transformer les visions de mes clients en réalités concrètes, durables et élégantes.
        </p>
      </TextContent>

      <ImageContent
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Projet architectural"
        />
      </ImageContent>
    </SectionContainer>
  );
};

export default Accueil;
