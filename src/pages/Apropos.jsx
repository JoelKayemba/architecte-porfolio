import React from 'react';
import styled from 'styled-components';
import { FaTools, FaRegLightbulb, FaUsers, FaMountain, FaGlobeEurope, FaLayerGroup } from 'react-icons/fa';
import portrait from '../assets/images/pres2.jpg'; // portrait ou photo stylisée

const Page = styled.div`
  background-color: #151918;
  color: white;
  padding: 100px 40px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Intro = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    color: #ccc;
    line-height: 1.7;
  }
`;

const Bio = styled.section`
  background: linear-gradient(135deg, #1b1f1f, #202524);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0 auto 100px;
  max-width: 1100px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 30px;
  }

  img {
    width: 350px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }

  .text {
    flex: 1;

    h2 {
      font-size: 28px;
      margin-bottom: 15px;
      color: #ffffff;
    }

    p {
      font-size: 15px;
      color: #cccccc;
      line-height: 1.6;
    }
  }
`;


const Vision = styled.section`
  max-width: 1000px;
  margin: 0 auto 80px;
  text-align: center;

  h3 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    color: #ccc;
    line-height: 1.7;
  }
`;

const ValuesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto 100px;
  
      
`;

const ValueCard = styled.div`
  background-color: #1f2423;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);

  svg {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 18px;
    color: #f1f1f1;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #aaa;
  }
`;

const Stats = styled.section`
  background-color: #202524;
  padding: 60px 30px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  text-align: center;

  .item {
    flex: 1;
    min-width: 150px;

    h2 {
      font-size: 36px;
      margin-bottom: 10px;
      color: #fff;
    }

    span {
      color: #aaa;
      font-size: 14px;
    }
  }
`;

const Apropos = () => {
  return (
    <Page>
      <Intro>
        <h1>À propos de nous</h1>
        <p>
          Plus qu’une agence, une vision. Chez nous, l’architecture est un langage, une émotion, un impact. Nous concevons des espaces durables, fonctionnels et inspirants à travers le monde.
        </p>
      </Intro>

      <Bio>
        <img src={portrait} alt="Architecte fondateur" />
        <div className="text">
          <h2>Joel Kayemba — Architecte fondateur</h2>
          <p>
            Formé entre l’Afrique centrale et le Québec, Joel met l’humain au cœur de chaque projet. Il conçoit des lieux vivants, connectés à la nature, au contexte, et à ceux qui les habitent.
            Depuis plus de 10 ans, il collabore avec des artistes, urbanistes et ingénieurs pour repousser les limites du design contemporain.
          </p>
        </div>
      </Bio>

      <Vision>
        <h3>Notre mission</h3>
        <p>
          Créer des lieux qui racontent une histoire, où esthétique rime avec utilité. Nous croyons en une architecture qui respecte l’environnement, qui valorise les usages, et qui inspire la vie.
        </p>
      </Vision>

      <ValuesGrid>
        <ValueCard>
          <FaRegLightbulb />
          <h4>Créativité</h4>
          <p>Explorer chaque projet avec un œil neuf, proposer des formes uniques et visionnaires.</p>
        </ValueCard>

        <ValueCard>
          <FaTools />
          <h4>Précision</h4>
          <p>Des plans détaillés, des solutions concrètes, un souci de qualité de chaque matériau.</p>
        </ValueCard>

        <ValueCard>
          <FaUsers />
          <h4>Relation client</h4>
          <p>Nous construisons avec vous, dans un dialogue constant, avec bienveillance et clarté.</p>
        </ValueCard>

        <ValueCard>
          <FaMountain />
          <h4>Durabilité</h4>
          <p>Matériaux locaux, énergie optimisée, longévité intégrée dès la conception.</p>
        </ValueCard>

        <ValueCard>
          <FaGlobeEurope />
          <h4>Culture & contexte</h4>
          <p>Chaque lieu est différent. Notre architecture s’adapte aux traditions et à la géographie.</p>
        </ValueCard>

        <ValueCard>
          <FaLayerGroup />
          <h4>Design intégré</h4>
          <p>Mobilier, lumières, matières : tout est pensé comme une œuvre cohérente.</p>
        </ValueCard>
      </ValuesGrid>

      <Stats>
        <div className="item">
          <h2>10+</h2>
          <span>Années d'expérience</span>
        </div>
        <div className="item">
          <h2>50+</h2>
          <span>Projets livrés</span>
        </div>
        <div className="item">
          <h2>7</h2>
          <span>Pays d’intervention</span>
        </div>
        <div className="item">
          <h2>100%</h2>
          <span>Clients satisfaits</span>
        </div>
      </Stats>
    </Page>
  );
};

export default Apropos;
