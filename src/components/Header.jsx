// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(179, 179, 179, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  z-index: 1000;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;




const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color:rgb(255, 255, 255);
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: #404444;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #F1F1F1 0%,rgb(255, 255, 255) 100%);
  color:rgb(0, 0, 0);
  border: 1px solid #151918;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #151918;
    color:rgb(201, 178, 178);
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 22px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background:rgb(80, 80, 80);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Hamburger onClick={() => setOpen(!open)}>
        ☰
      </Hamburger>

      <NavLinks>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/projets">Projets</StyledLink>
        <StyledLink to="/a-propos">À propos</StyledLink>
        <StyledLink to="/philosophie">Philosophie</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>

      <CTAButton>Réserver un appel</CTAButton>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <StyledLink to="/" onClick={() => setOpen(false)}>Accueil</StyledLink>
            <StyledLink to="/projets" onClick={() => setOpen(false)}>Projets</StyledLink>
            <StyledLink to="/a-propos" onClick={() => setOpen(false)}>À propos</StyledLink>
            <StyledLink to="/philosophie" onClick={() => setOpen(false)}>Philosophie</StyledLink>
            <StyledLink to="/blog" onClick={() => setOpen(false)}>Blog</StyledLink>
            <StyledLink to="/contact" onClick={() => setOpen(false)}>Contact</StyledLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
