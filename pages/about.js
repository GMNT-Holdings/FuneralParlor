import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/AboutUs.module.css';

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About Us - Mpiti's Funeral Home</title>
      </Head>
      <div className={styles.hero}>
        <Image src="/images/about.jpg" alt="About Us" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.text}>
          Mpiti's Funeral Home is based in the Winnie-Madikizela Mandela Local Municipality (head office), which is part of the Eastern Cape province of South Africa. This small business initiative prides itself on being an innovative and empowering tool in the region and the province as a whole.
        </p>
        <p className={styles.text}>
          Mpiti's Funeral Home provides its services to the public and private sectors, as well as individuals, at affordable rates. Keeping abreast of changing trends in a highly competitive and volatile industry has enabled our company to strengthen its position as a prominent burial scheme, tent hire, and wedding arrangements business.
        </p>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h3>Contact Us Today</h3>
          <p>For more information about our services, feel free to reach out!</p>
          <button className={styles.ctaButton}>Get in Touch</button>
        </div>
      </div>

      <div className={styles.teamContainer}>
        {/* Team Members Section */}
        <h2 className={styles.subheading}>Meet Our Team</h2>
        <div className={styles.row}>
          <div className={styles.teamMember}>
            <img src="/images/mrs-b-mpiti.jpg" alt="Mrs. B Mpiti" className={styles.memberImage} />
            <h3>MRS. B MPITI</h3>
            <p>Director</p>
            <p>With over 20 years of experience, Mrs. Mpiti leads our team with compassion and dedication.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/mr-j-smith.jpg" alt="Mr. J Smith" className={styles.memberImage} />
            <h3>MR. J SMITH</h3>
            <p>Funeral Director</p>
            <p>Mr. Smith provides guidance and support to families during their time of need.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/ms-l-johnson.jpg" alt="Ms. L Johnson" className={styles.memberImage} />
            <h3>MS. L JOHNSON</h3>
            <p>Administrative Assistant</p>
            <p>Ms. Johnson ensures that all operations run smoothly and efficiently.</p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className={styles.missionVision}>
        <div className={styles.mission}>
          <h2 className={styles.subheading}>Mission Statement</h2>
          <p className={styles.text}>
            We intend to be the first choice service provider for every business enterprise, from small to large companies, organizations, and individuals, contributing to the growth of the South African economy and development.
          </p>
        </div>
        <div className={styles.vision}>
          <h2 className={styles.subheading}>Vision</h2>
          <p className={styles.text}>
            Mpiti's Funeral Home aspires to be the best service provider recognized throughout the country.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
