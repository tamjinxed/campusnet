import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Groups() {
  return (
    <>
      <Head>
        <title>Groups - CampusNet</title>
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Groups</h1>
        <p className="mt-2">This is where groups would be listed.</p>
      </main>
    </>
  );
}
