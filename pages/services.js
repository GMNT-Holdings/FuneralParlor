// src/pages/services.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Services.module.css';

const Services = () => {
  const servicesList = [
    { title: 'Funeral Schemes and Arrangements', description: 'Comprehensive plans to suit your needs.' },
    { title: 'Wedding Arrangements', description: 'Beautiful setups for your special day.' },
    { title: 'Tent Hire', description: 'Quality tents for all occasions.' },
    { title: 'Burial Scheme', description: 'Affordable burial plans available.' },
    { title: 'Public Address Systems', description: 'High-quality sound systems for events.' },
    { title: 'Exhumations', description: 'Professional exhumation services.' },
    { title: 'Decorations and Catering', description: 'Elegant decorations and delicious catering.' },
    { title: 'Fresh Flowers', description: 'Beautiful floral arrangements for any occasion.' },
    { title: 'Stages', description: 'Custom stages for events and ceremonies.' },
    { title: 'Chairs and Programmes', description: 'Comfortable seating and printed programmes.' },
  ];

  return (
    <div>
      <Head>
        <title>Services - Mpiti's Funeral Home</title>
      </Head>
      <div className={styles.hero}>
        <Image src="/images/services.jpg" alt="Services" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.servicesContainer}>
        <h1>Our Services</h1>
        <div className={styles.servicesGrid}>
          {servicesList.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;