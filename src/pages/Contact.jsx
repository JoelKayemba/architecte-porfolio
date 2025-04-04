import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import contactImg from '../assets/images/heros.jpg'; // image latérale stylée

const Page = styled.div`
  background-color: #151918;
  color: white;
  padding: 100px 40px;
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 80px 20px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .info-block {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;

    svg {
      font-size: 20px;
      color: white;
    }

    span {
      color: #ccc;
      font-size: 14px;
    }
  }
`;

const Form = styled.form`
  flex: 1;
  background-color: #1f2423;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  width: 100%;

  input,
  textarea {
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 20px;
    background-color: #2a2f2f;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    outline: none;

    &::placeholder {
      color: #888;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button {
    padding: 12px 30px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.3s;

    &:hover {
      background-color: white;
      color: #151918;
    }
  }
`;

const ImageSide = styled.div`
  flex: 1;
  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Contact = () => {
  return (
    <Page>
      <ContactInfo>
        <h1>Contactez-nous</h1>
        <p>
          Vous avez une idée, un projet, ou une question ? Écrivez-nous. Nous sommes à votre écoute pour transformer vos idées en espaces concrets et inspirants.
        </p>

        <div className="info-block">
          <FaEnvelope />
          <span>contact@architectejoel.com</span>
        </div>

        <div className="info-block">
          <FaPhoneAlt />
          <span>+243 970 000 000</span>
        </div>

        <div className="info-block">
          <FaMapMarkerAlt />
          <span>Montréal, Québec / Kinshasa, RDC</span>
        </div>
      </ContactInfo>

      <Form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message..." required />
        <button type="submit">Envoyer le message</button>
      </Form>

      <ImageSide>
        <img src={contactImg} alt="architecture" />
      </ImageSide>
    </Page>
  );
};

export default Contact;
