// src/components/ProjetCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  background-color: #404444;
  padding: 80px 60px;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Inner = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  max-width: 1200px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageSection = styled(motion.div)`
  flex: 1;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const TextSection = styled(motion.div)`
  flex: 1;
  color: white;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #f1f1f1;

    @media (max-width: 768px) {
      font-size: 22px;
      text-align: center;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .stats {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;

    div {
      font-size: 14px;
      line-height: 1.4;

      span {
        font-size: 22px;
        font-weight: bold;
        display: block;
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;
    }
  }
`;


const ProjetCard = ({ image, title, description, stats, onClickMore, reverse }) => {
  return (
    <Container>
      <Inner style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <ImageSection
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={image}
            alt={title}
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeOut', type: 'keyframes' }}
          />
        </ImageSection>

        <TextSection
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{title}</h2>
          <p>{description}</p>

          {stats && (
            <div className="stats">
              {stats.map((item, index) => (
                <div key={index}>
                  <span>{item.value}</span>
                  {item.label}
                </div>
              ))}
            </div>
          )}

        </TextSection>
      </Inner>
    </Container>
  );
};

export default ProjetCard;
