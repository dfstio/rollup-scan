import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mina Rollup Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming soon" />
        <img src="/minanft.svg" alt="MinaNFT" />
      </main>

      <Footer />
    </div>
  );
}
