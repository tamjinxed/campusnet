import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>CampusNet</title>
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to CampusNet</h1>
        <p className="text-center mt-2">Your portal to campus communities, events and more.</p>
      </main>
    </>
  );
}
