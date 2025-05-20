import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events - CampusNet</title>
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Events</h1>
        <p className="mt-2">This is where events would be listed.</p>
      </main>
    </>
  );
}
