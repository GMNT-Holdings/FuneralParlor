import Head from 'next/head';
import '../styles/globals.css'; // Import global styles
//import '../styles/home.module.css'; // Import your module styles if needed
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
                    integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM6g0g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5" 
                    crossOrigin="anonymous" 
                /> {/* Correctly closed the link tag */}
            </Head>
            <Header /> {/* Include the Header */}
            <Component {...pageProps} />
            <Footer /> {/* Include the Footer */}
        </>
    );
}

export default MyApp;
