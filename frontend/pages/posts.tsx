import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - CampusNet</title>
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <p className="mt-2">This is where posts would be listed.</p>
      </main>
    </>
  );
}
