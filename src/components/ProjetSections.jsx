// src/components/SectionProjets.js
import React from 'react';
import styled from 'styled-components';
import ProjetCard from './ProjectCard';

import maison from '../assets/images/maison.jpg';
import bureau from '../assets/images/bureau.jpg';
import centre from '../assets/images/centre.jpg';

const Section = styled.section`
  padding: 100px 60px;
  background-color: #f1f1f1;

  h2 {
    text-align: center;
    font-size: 32px;
    color: #151918;
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

const projects = [
  {
    image: maison,
    title: "Maison minimaliste",
    description: "Ce projet résidentiel a été pensé pour allier confort et pureté visuelle. Le bois naturel, combiné au béton brut, crée une atmosphère à la fois chaleureuse et contemporaine. Chaque pièce a été optimisée pour laisser entrer un maximum de lumière naturelle.",
    stats: [
      { label: "m² habitables", value: "230" },
      { label: "Matériaux naturels utilisés", value: "85%" },
      { label: "Satisfaction client", value: "100%" }
    ]
  },
  {
    image: bureau,
    title: "Bureau en ville",
    description: "Situé au cœur de la métropole, cet espace professionnel a été conçu pour favoriser la productivité et le bien-être. Grâce à une organisation intelligente des postes de travail et une acoustique soignée, l’environnement est à la fois calme et stimulant.",
    stats: [
      { label: "Postes de travail", value: "52" },
      { label: "Bureaux modulables", value: "100%" },
      { label: "Espaces collaboratifs", value: "4" }
    ]
  },
  {
    image: centre,
    title: "Centre culturel",
    description: "Pensé comme un lieu de vie artistique, ce centre culturel intègre une galerie, un auditorium et plusieurs salles d’ateliers. Sa façade incurvée invite les visiteurs à la découverte, tandis que l’intérieur favorise l’échange et la créativité.",
    stats: [
      { label: "Capacité d'accueil", value: "1 200" },
      { label: "Événements mensuels", value: "25+" },
      { label: "Artistes partenaires", value: "80+" }
    ]
  }
];

const ProjetSections = () => {
  return (
    <Section>
      <h2>Projets en vedette</h2>
      {projects.map((proj, idx) => (
        <ProjetCard
          key={idx}
          image={proj.image}
          title={proj.title}
          description={proj.description}
          stats={proj.stats}
          reverse={idx % 2 === 1}
          onClickMore={() => console.log(`Voir plus sur : ${proj.title}`)}
        />
      ))}
    </Section>
  );
};

export default ProjetSections;
