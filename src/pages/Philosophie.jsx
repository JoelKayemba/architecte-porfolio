import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bgr.jpeg'; 
import { motion } from 'framer-motion';
import { FaLeaf, FaUserFriends, FaTools, FaLightbulb } from 'react-icons/fa';

const Page = styled.div`
  background-color: #151918;
  color: rgb(255, 255, 255);
  padding: 100px 40px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Intro = styled.section`
  max-width: 900px;
  margin: 0 auto 80px;
  text-align: center;

  h1 {
    font-size: 38px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  blockquote {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.49);
    font-style: italic;
    line-height: 1.6;
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 100px;
`;

const Block = styled(motion.div)`
  background-color: #1f2423;
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  transition: 0.3s;

  svg {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: rgb(255, 255, 255);
  }

  .quote {
    font-size: 14px;
    font-style: italic;
    color: #999;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: #bbb;
    line-height: 1.6;
  }
`;

const Immersive = styled.section`
  background: url(${bg}) center/cover no-repeat;
  padding: 120px 40px;
  color: white;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(21, 25, 24, 0.6);
  }

  div {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: 0 auto;

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      line-height: 1.7;
      color: #ddd;
    }
  }
`;

const Philosophie = () => {
  return (
    <Page>
      <Intro>
        <h1>Notre Philosophie</h1>
        <blockquote>
          "L'architecture n’est pas simplement une question de forme, mais un art de vivre, de ressentir, de transmettre."
        </blockquote>
      </Intro>

      <Grid>
        <Block whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaTools />
          <h3>Design fonctionnel</h3>
          <p className="quote">"Un bel espace est un espace utile."</p>
          <p>
            Chaque mètre carré a un rôle. Nos plans sont pensés pour améliorer vos habitudes, fluidifier vos gestes, et embellir vos journées.
          </p>
        </Block>

        <Block whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaLeaf />
          <h3>Durabilité & écologie</h3>
          <p className="quote">"Construire aujourd’hui, sans compromettre demain."</p>
          <p>
            Nous utilisons des matériaux naturels, locaux, recyclables. Nos bâtiments sont conçus pour réduire leur impact environnemental à long terme.
          </p>
        </Block>

        <Block whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaUserFriends />
          <h3>Écoute & co-création</h3>
          <p className="quote">"Vous êtes au centre du projet."</p>
          <p>
            Chaque projet démarre par une écoute active. Vos besoins, vos rêves, vos contraintes : tout est pris en compte avec rigueur et bienveillance.
          </p>
        </Block>

        <Block whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaLightbulb />
          <h3>Innovation continue</h3>
          <p className="quote">"Réinventer l’espace à chaque projet."</p>
          <p>
            Nous explorons de nouvelles technologies, formes et méthodes pour proposer une architecture toujours en mouvement, au service de la vie.
          </p>
        </Block>
      </Grid>

      <Immersive>
        <div>
          <h2>L’architecture est une émotion</h2>
          <p>
            Nous croyons que chaque espace doit raconter une histoire. Celle d’un lieu, d’un usage, d’un rêve. Nous donnons vie à vos intentions, en respectant ce qui vous rend unique.  
            L’architecture que nous concevons n’est pas figée : elle vit, elle respire, elle vous accompagne.
          </p>
        </div>
      </Immersive>
    </Page>
  );
};

export default Philosophie;
