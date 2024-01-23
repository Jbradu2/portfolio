import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 20px;
`;

const ContactForm = styled.form`
  /* Add more styling....... */
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Joshua R. Bradshaw',
    email: 'Joshua.Ry.Bradshaw@gmail.com',
    message: '??',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   //need to add submission logic for form...
  };

  return (
    <ContactWrapper>
      <h2>Contact</h2>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

<label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
