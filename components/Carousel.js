// components/Carousel.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/carousel.module.css'; // Create a new CSS file for carousel styles

const images = [
  {
    src: '/images/mpitibgimage1.jpg',
    title: "Welcome to Mpiti's Funeral Home",
    subtitle: "Providing compassionate and professional services to our community."
  },
  {
    src: '/images/mpitibgimage2.jpg',
    title: "Honoring Lives with Dignity",
    subtitle: "We celebrate the lives of those we have lost."
  },
  {
    src: '/images/mpitibgimage3.jpg',
    title: "Comprehensive Funeral Services",
    subtitle: "Tailored arrangements to meet your needs."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].title} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{images[currentIndex].title}</h1>
        <p className={styles.heroSubtitle}>
          {images[currentIndex].subtitle}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
