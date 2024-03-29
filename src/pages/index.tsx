import FallingLogosSection from '@/pages/home/FallingLogosSection';
import JavascriptSection from '@/pages/home/JavascriptSection';
import HeroSection from '@/pages/home/HeroSection';
import Head from 'next/head'
import ApiSection from '@/pages/home/ApiSection';
import MarkupSection from '@/pages/home/MarkupSection';
import ScoresSection from '@/pages/home/ScoresSection';
import Footer from '@/pages/home/Footer';

const Home = () => {
    return (
        <>
            <Head>
                <title>Project Monogram</title>
                <meta name="description" content="Project Monogram Exercise-III" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HeroSection />
                <JavascriptSection />
                <FallingLogosSection />
                <ApiSection />
                <MarkupSection />
                <ScoresSection />
                <Footer />
            </main>
        </>
    );
  };
  
  export default Home;