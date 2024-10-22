import Link from 'next/link'; // Assuming you're using Next.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social icons
import styles from './Footer.module.css'; // Import CSS module for styling

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles['green-line']}></div> {/* Thick green line */}
            <div className={styles.footerContent}>
                <div className={styles.info}>
                    <p className={styles.footerText}>
                        LOGO HERE<br />
                        Mpiti is underwritten by GMNT, <br />
                        Company Registration No: 2022/238931/07
                    </p>
                </div>
                <div className={styles.quickLinks}>
                    <h4 className={styles.footerHeading}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/" className={styles.link}>Home</Link></li>
                        <li><Link href="/about" className={styles.link}>About Us</Link></li>
                        <li><Link href="/services" className={styles.link}>Services</Link></li>
                        <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h4 className={styles.footerHeading}>Get in Touch</h4>
                    <p className={styles.footerText}>Erf 48, Fikile Mlomo Street, Mbizana, 4800</p>
                    <p className={styles.footerText}>039 251 0331</p>
                    <p className={styles.footerText}>mpitifunerals@gmail.com</p>
                </div>
                <div className={styles.branches}>
                    <h4 className={styles.footerHeading}>Branches</h4>
                    <ul className={styles.linkList}>
                        <li>Winnie-Madikizela Mandela Local Municipality (head office)</li>
                    </ul>
                </div>
            </div>
            {/* Social Links Section */}
            <div className={styles.socialLinks}>
                <h4 className={styles.footerHeading}>Follow Us</h4>
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className={styles.privacy}>
                <p className={styles.footerText}>© 2024 Mpiti Funeral Parlour. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
