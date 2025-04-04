// src/components/SectionExperience.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUtensils, FaCalendarCheck, FaEuroSign } from 'react-icons/fa';
import backgroundImage from '../assets/images/cuisine.jpg';

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 200px 60px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  color: white;
  margin-bottom: 100px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(21, 25, 24, 0.75);
  }

  @media (max-width: 768px) {
    padding: 100px 30px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 30px;
    color: #e0e0e0;
  }

  .features {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      color: #ccc;
      font-size: 14px;

      svg {
        color: #fff;
        font-size: 18px;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-end;
    }

    button {
      padding: 10px 18px;
      border: 1px solid white;
      background-color: transparent;
      color: white;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: white;
        color: #151918;
      }
    }
  }
`;

const SectionExperience = () => {
  return (
    <Section>
      <Content>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Essayez votre future cuisine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Comme pour une voiture haut de gamme, testez votre future cuisine avant de l’adopter. Vivez une expérience immersive dans un espace moderne et fonctionnel.
        </motion.p>

        <motion.div
          className="features"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div><FaUtensils /> Cuisine équipée dernier cri</div>
          <div><FaCalendarCheck /> Visite immersive sur rendez-vous</div>
          <div><FaEuroSign /> Devis personnalisés</div>
        </motion.div>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button>Planifier une visite</button>
          <button>Voir les tarifs</button>
        </motion.div>
      </Content>
    </Section>
  );
};

export default SectionExperience;
