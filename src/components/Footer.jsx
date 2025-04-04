// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #151918;
  color: #ccc;
  padding: 60px 30px;
  text-align: center;

  .socials {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

    a {
      color: white;
      font-size: 20px;
      transition: color 0.3s ease;

      &:hover {
        color: #aaa;
      }
    }
  }

  p {
    font-size: 14px;
    margin-top: 10px;
    color: #888;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:contact@architecte.com"><FaEnvelope /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Architecte • Tous droits réservés</p>
    </FooterWrapper>
  );
};

export default Footer;
