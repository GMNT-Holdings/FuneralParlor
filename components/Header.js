import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import CSS module for styling
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Header = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleAddressClick = () => {
        // Open maps app with the address
        const address = 'Erf 48 Fikile Mlomo Street, Mbizana, 4800';
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(url, '_blank'); // Open in a new tab
    };

    const handlePhoneClick = () => {
        // Open phone app
        const phoneNumber = '(039) 251-0331';
        window.open(`tel:${phoneNumber.replace(/\D/g, '')}`); // Remove non-digit characters
    };

    const handleEmailClick = () => {
        // Open email app
        const email = 'mpitifunerals@gmail.com';
        window.open(`mailto:${email}`);
    };

    return (
        <>
            <div className={styles.contactInfo}>
                <div className={styles.contactItem} onClick={handleAddressClick}>
                    <FaMapMarkerAlt className={styles.icon} /> {/* Address Icon */}
                    <span>Erf 48 Fikile Mlomo Street, Mbizana, 4800</span>
                </div>
                <div className={styles.contactItem} onClick={handlePhoneClick}>
                    <FaPhone className={styles.icon} /> {/* Phone Icon */}
                    <span>(039) 251-0331</span>
                </div>
                <div className={styles.contactItem} onClick={handleEmailClick}>
                    <FaEnvelope className={styles.icon} /> {/* Email Icon */}
                    <span>mpitifunerals@gmail.com</span>
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/home">Logo</Link> {/* Replace with your logo */}
                </div>
                <nav className={styles.nav}>
                    <Link 
                        href="/home" 
                        className={activeLink === 'home' ? styles.active : ''} 
                        onClick={() => handleLinkClick('home')}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className={activeLink === 'about' ? styles.active : ''} 
                        onClick={() => handleLinkClick('about')}
                    >
                        About Us
                    </Link>
                    <Link 
                        href="/services" 
                        className={activeLink === 'services' ? styles.active : ''} 
                        onClick={() => handleLinkClick('services')}
                    >
                        Services
                    </Link>
                    <Link 
                        href="/contact" 
                        className={activeLink === 'contact' ? styles.active : ''} 
                        onClick={() => handleLinkClick('contact')}
                    >
                        Contact
                    </Link>
                </nav>
                <Link href="/contact" className={styles.inquiriesButton}>
                    Inquiries
                </Link>
            </header>
            <div className={styles['green-line']}></div> {/* Thick green line */}
        </>
    );
};

export default Header;
