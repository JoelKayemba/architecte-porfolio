import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import blog1 from '../assets/images/villa.jpeg';
import blog2 from '../assets/images/loft.jpeg';
import blog3 from '../assets/images/musee.jpeg';

const Page = styled.div`
  background-color: #151918;
  color: white;
  padding: 100px 40px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }

  h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
`;

const Card = styled(motion.div)`
  background-color: #1f2423;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 20px;

    h3 {
      font-size: 20px;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .date {
      font-size: 12px;
      color: #aaa;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      color: #ccc;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    button {
      padding: 10px 20px;
      background-color: transparent;
      border: 1px solid white;
      color: white;
      font-size: 13px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 4px;

      &:hover {
        background-color: white;
        color: #151918;
      }
    }
  }
`;

const articles = [
  {
    image: blog1,
    title: "5 tendances architecturales en 2025",
    date: "3 avril 2025",
    summary: "Découvrez les nouvelles approches en matière de formes, matériaux, et intégration environnementale pour la prochaine décennie.",
  },
  {
    image: blog2,
    title: "Minimalisme et lumière naturelle",
    date: "24 mars 2025",
    summary: "Comment la simplicité formelle et la gestion de la lumière peuvent transformer l’espace de vie en œuvre artistique.",
  },
  {
    image: blog3,
    title: "Matériaux durables : nos choix",
    date: "10 mars 2025",
    summary: "Du bois local à la terre crue, tour d’horizon des matériaux durables que nous privilégions dans nos projets.",
  },
];

const Blog = () => {
  return (
    <Page>
      <h1>Notre Blog</h1>
      <Grid>
        {articles.map((article, index) => (
          <Card
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img src={article.image} alt={article.title} />
            <div className="content">
              <h3>{article.title}</h3>
              <div className="date">{article.date}</div>
              <p>{article.summary}</p>
              <button>Lire plus</button>
            </div>
          </Card>
        ))}
      </Grid>
    </Page>
  );
};

export default Blog;
