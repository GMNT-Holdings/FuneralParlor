// src/pages/contact.js
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Contact.module.css'; // Import CSS Module for styling
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons

const Contact = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact Us - Mpiti's Funeral Home</title>
      </Head>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image src="/images/contact.jpg" alt="Hero" layout="fill" objectFit="cover" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>We are here to assist you with any inquiries.</h1>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className={styles.contactContent}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h2></h2>
          <div className={styles.greenLineTop}></div> {/* Green line above emailButton */}
          <h3 className={styles.emailButton}>Enquiries</h3>
          <p>
            <FaPhone className={styles.icon} /> 083-488 3908 {/* Phone Icon */}
          </p>
          <p>
            <FaEnvelope className={styles.icon} /> mpitifunerals@gmail.com {/* Email Icon */}
          </p>
          <p>
            <FaMapMarkerAlt className={styles.icon} /> <strong>Business Hours:</strong>
          </p>
          <p>07H00 - 19H00 Weekdays</p>
          <p>08H00 - 14H00 Saturdays</p>
          <p>(Closed on Public Holidays and Sundays)</p>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2></h2>
          <h3 className={styles.contactFormEmailButton}>Email</h3> {/* Use the new class here */}
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
