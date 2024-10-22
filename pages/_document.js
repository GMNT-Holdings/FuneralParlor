// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Add Google Fonts link here */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                    />
                    {/* Add Font Awesome link here */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                        integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM6g0n5g5e5e5e5e5e5e5e5e5e5e5e5e5e5e5"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
                    integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM6g0g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5" 
                    crossorigin="anonymous" 
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
