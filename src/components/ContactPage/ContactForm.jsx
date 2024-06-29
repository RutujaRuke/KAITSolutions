import React, { useState } from 'react';
import '../CSS/ContactPage.css';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Contact: contact,
      Message: message
    };

    axios.post('https://sheet.best/api/sheets/7fb15898-915b-4daa-8634-bcab03ea9c1a', data)
      .then((response) => {
        console.log(response);
        setName('');
        setEmail('');
        setContact('');
        setMessage('');
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
        console.error('Error details:', error.response.data); // Log the response data for more details
      });
  };

  return (
    <div className="form-container">
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          required
          placeholder="Student Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          className="form-control"
          required
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />

        <label htmlFor="contact">Contact No</label>
        <input
          type="text"
          id="contact"
          className="form-control"
          required
          placeholder="Contact No"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
        <br />

        <label htmlFor="message">Enter Message</label>
        <input
          type="text"
          id="message"
          className="form-control"
          required
          placeholder="Enter Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <br />

        <div className="submit-button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
