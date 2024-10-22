import Head from 'next/head';
import Carousel from '../components/Carousel'; // Import the Carousel component
import styles from '../styles/home.module.css';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Mpiti's Funeral Home</title>
      </Head>
      
      {/* Carousel Section */}
      <div className={styles.carouselContainer}>
        <Carousel /> {/* Use the Carousel component here */}
        <div className={styles.widgetRow}>
          <div className={styles.elementorWidgetContainer}>
            <div className={styles.iconBox}>
              <i className={`fas fa-user-plus ${styles.icon}`}></i>
            </div>
            <h3>Join Mpiti</h3>
            <p>Sign up today and save</p>
          </div>
          <div className={styles.elementorWidgetContainer}>
            <div className={styles.iconBox}>
              <i className={`fas fa-file-alt ${styles.icon}`}></i>
            </div>
            <h3>Claims Submissions</h3>
            <p>Get claim information</p>
          </div>
          <div className={styles.elementorWidgetContainer}>
            <div className={styles.iconBox}>
              <i className={`fas fa-phone-alt ${styles.icon}`}></i>
            </div>
            <h3>Call Me Back</h3>
            <p>SMS "Mpiti" to 00000</p>
          </div>
        </div>
      </div>


      {/* New Section with Information */}
      <div className={styles.infoSection}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Welcome to Mpiti Funeral</h2>
          <p className={styles.highlightedText}>A business with a personal touch</p>
          <p>We assist families with the relevant decisions and practical arrangements that come with saying goodbye to loved ones. Our strength lies in the art of blending the benefits of a small business and its resources, expertise, and financial stability, with an accurate awareness of each client’s individual needs.</p>
        </div>
        <div className={styles.column}>
          {/* You can add another column here if needed */}
          <p>Under the leadership of MRS MPITI, MPITI’S FUNERAL HOME strives to expand its services even further and become the burial scheme of choice for a number of individuals, public and private sectors.</p>
          <p>WE provides services for public, private sectors and to individuals at affordable rates. Keeping abreast with changing trends in a highly competitive and volatile industries and economies has enabled our company to strengthen its position as of the prominent burial scheme, tents hire, and wedding arrangements business.</p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <h2 className={styles.heading}>Gallery</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <img
              src="/images/gallery4.jpg"
              alt="Gallery Image 1"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.col}>
            <img
              src="/images/gallery2.jpg"
              alt="Gallery Image 2"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.col}>
            <img
              src="/images/gallery3.jpg"
              alt="Gallery Image 3"
              className={styles.galleryImage}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>
                  "The service was exceptional and very compassionate."
                </p>
                <h5 className={styles.cardTitle}>- John Doe</h5>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>
                  "They helped us through a difficult time with grace."
                </p>
                <h5 className={styles.cardTitle}>- Jane Smith</h5>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>
                  "Highly recommend their services!"
                </p>
                <h5 className={styles.cardTitle}>- Emily Johnson</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blog}>
        <h2 className={styles.heading}>Latest Blog Posts</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Understanding Grief</h5>
                <p className={styles.cardText}>
                  A guide to understanding the grieving process.
                </p>
                <a
                  href="/#"
                  className={styles.btn}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Planning a Funeral</h5>
                <p className={styles.cardText}>
                  Tips for planning a meaningful funeral service.
                </p>
                <a href="/#" className={styles.btn}>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Coping with Loss</h5>
                <p className={styles.cardText}>
                  Strategies for coping with the loss of a loved one.
                </p>
                <a href="#" className={styles.btn}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section with Information */}
      <div className={styles.infoSection1}>
        <div className={styles.column1}>
          <p className={styles.highlightedText}>You can make your payments from the following stores</p>
          <img src="/images/store1.png" alt="Store 1" className={styles.storeImage} />
            <img src="/images/store2.jpg" alt="Store 2" className={styles.storeImage} />
            <img src="/images/store3.jpg" alt="Store 3" className={styles.storeImage} />
            <img src="/images/store4.jpg" alt="Store 4" className={styles.storeImage} />
          </div>
      </div>
    </div>
  );
}

export default HomePage;
