import Head from 'next/head';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Carts from '../components/Carts';
import Info from '../components/Info';
import CommentsList from '../components/CommentsList';
import Form from '../components/Form';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo dark theme landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
      <Navigation />
      <Header />
      <Carts />
      <Info />
      <CommentsList />
      <Form />
      <Footer />
    </>
  );
}
