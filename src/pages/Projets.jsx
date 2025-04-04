import React from 'react';
import styled from 'styled-components';

import maison from '../assets/images/maison.jpg';
import bureau from '../assets/images/bureau.jpg';
import centre from '../assets/images/centre.jpg';
import villa from '../assets/images/villa.jpeg';
import loft from '../assets/images/loft.jpeg';
import musee from '../assets/images/musee.jpeg';

const Container = styled.div`
  background-color: #151918;
  padding: 100px 60px;

  h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 60px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
    h1 {
      font-size: 28px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .content {
    padding: 20px;
    color: #fff;

    h3 {
      margin-bottom: 10px;
      font-size: 20px;
      color: #f1f1f1;
    }

    p {
      font-size: 14px;
      color: #aaa;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 13px;
        color: #888;
      }
    }
  }
`;

const projets = [
  {
    image: maison,
    title: "Maison éco-minimaliste",
    description: "Une résidence privée alliant lumière naturelle, bois brut et design scandinave épuré.",
    stats: [
      { label: "Surface", value: "200 m²" },
      { label: "Autonomie", value: "95%" },
      { label: "Durée de chantier", value: "8 mois" }
    ]
  },
  {
    image: bureau,
    title: "Bureau urbain à Lyon",
    description: "Espaces lumineux, insonorisés et connectés dans un quartier d'affaires moderne.",
    stats: [
      { label: "Open space", value: "Oui" },
      { label: "Postes", value: "60+" },
      { label: "Espaces détente", value: "3" }
    ]
  },
  {
    image: centre,
    title: "Centre culturel à Bordeaux",
    description: "Un espace pour l'expression artistique, accueillant expositions et performances.",
    stats: [
      { label: "Capacité", value: "1200 personnes" },
      { label: "Événements/an", value: "60+" },
      { label: "Artistes accueillis", value: "300+" }
    ]
  },
  {
    image: villa,
    title: "Villa d’architecte à Marseille",
    description: "Vue sur mer, toit terrasse, volumes ouverts. Un bijou moderne et méditerranéen.",
    stats: [
      { label: "Surface", value: "320 m²" },
      { label: "Piscine intégrée", value: "Oui" },
      { label: "Classe énergie", value: "A+" }
    ]
  },
  {
    image: loft,
    title: "Loft industriel à Bruxelles",
    description: "Transformation d’une ancienne usine en habitat contemporain. Briques, métal et verrière.",
    stats: [
      { label: "Hauteur sous plafond", value: "4m" },
      { label: "Superficie", value: "250 m²" },
      { label: "Style", value: "Industriel chic" }
    ]
  },
  {
    image: musee,
    title: "Musée d’architecture à Genève",
    description: "Espace culturel modulable, façades en béton brut et jeux de lumière naturelle.",
    stats: [
      { label: "Visiteurs/an", value: "50000+" },
      { label: "Salles d'expo", value: "6" },
      { label: "Prix d'architecture", value: "3" }
    ]
  },
  {
    image: centre,
    title: "Pavillon Horizon à Dakar",
    description: "Un espace modulable et ouvert aux artistes africains contemporains.",
    stats: [
      { label: "Surface", value: "1500 m²" },
      { label: "Ouverture", value: "2023" },
      { label: "Partenaires", value: "10 pays" }
    ]
  },
  {
    image: loft,
    title: "Eco-Loft Urbain à Lisbonne",
    description: "Un projet écologique utilisant des containers recyclés.",
    stats: [
      { label: "Unités", value: "4" },
      { label: "Durée chantier", value: "6 mois" },
      { label: "Budget", value: "150 000€" }
    ]
  },
  {
    image: maison,
    title: "Maison Boréale au Québec",
    description: "Structure bois/métal sur pilotis en pleine forêt boréale.",
    stats: [
      { label: "Altitude", value: "620 m" },
      { label: "Énergie", value: "100% solaire" },
      { label: "Vue panoramique", value: "Oui" }
    ]
  },
  {
    image: bureau,
    title: "Campus Nova à Berlin",
    description: "Bureaux, coworking, et incubateur pour startups européennes.",
    stats: [
      { label: "Superficie", value: "8000 m²" },
      { label: "Entreprises", value: "35" },
      { label: "Équipements", value: "Smart building" }
    ]
  },
  {
    image: musee,
    title: "Musée Laguna à Venise",
    description: "Un musée innovant construit sur des plateformes flottantes.",
    stats: [
      { label: "Flottabilité", value: "8 tonnes" },
      { label: "Œuvres exposées", value: "300+" },
      { label: "Partenariat UNESCO", value: "Oui" }
    ]
  },
  {
    image: villa,
    title: "Villa Ayana à Bali",
    description: "Maison de vacances ouverte sur la nature et la mer.",
    stats: [
      { label: "Chambres", value: "5 suites" },
      { label: "Piscine", value: "à débordement" },
      { label: "Style", value: "Bois & pierre" }
    ]
  },
  {
    image: centre,
    title: "Bibliothèque Vortex à Tokyo",
    description: "Architecture organique inspirée du mouvement des vagues.",
    stats: [
      { label: "Livres", value: "1 million+" },
      { label: "Espaces digitaux", value: "VR/AR" },
      { label: "Design", value: "Bio-morphique" }
    ]
  },
  {
    image: maison,
    title: "MicroHabitat Nomade",
    description: "Habitat compact, mobile et 100% autonome.",
    stats: [
      { label: "Surface", value: "25 m²" },
      { label: "Énergie", value: "Solaire + récup. eau" },
      { label: "Mobilité", value: "Oui, sur roues" }
    ]
  },
  {
    image: loft,
    title: "Penthouse Éclipse à New York",
    description: "Loft de luxe avec terrasse panoramique et jardin suspendu.",
    stats: [
      { label: "Étage", value: "38e" },
      { label: "Vue", value: "Central Park" },
      { label: "Surface", value: "280 m²" }
    ]
  },
  {
    image: villa,
    title: "Villa Solana en Sardaigne",
    description: "Maison en pierre blanche, patio central et fontaine.",
    stats: [
      { label: "Style", value: "Traditionnel/Moderne" },
      { label: "Année", value: "2022" },
      { label: "Surface terrain", value: "2000 m²" }
    ]
  }
  
];

const Projets = () => {
  return (
    <Container>
      <h1>Nos réalisations</h1>
      <Grid>
        {projets.map((proj, idx) => (
          <Card key={idx}>
            <img src={proj.image} alt={proj.title} />
            <div className="content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <ul>
                {proj.stats.map((stat, i) => (
                  <li key={i}><strong>{stat.label} :</strong> {stat.value}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Projets;
