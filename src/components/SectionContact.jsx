// src/components/SectionContact.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color:rgb(255, 255, 255);
  padding: 100px 60px;

  h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
    color: #151918;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input, textarea {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 15px;
    outline: none;
    resize: none;
  }

  button {
    align-self: flex-end;
    padding: 12px 24px;
    background-color: #151918;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #404444;
    }
  }
`;

const SectionContact = () => {
  return (
    <Section id="contact">
      <h2>Nous contacter</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea rows="5" placeholder="Votre message..." required />
        <button type="submit">Envoyer</button>
      </form>
    </Section>
  );
};

export default SectionContact;
