import Head from 'next/head';
 zsadkj-codex/design-student-centric-web-application
import Link from 'next/link';
 main
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>CampusNet</title>
      </Head>
      <Navbar />
 zsadkj-codex/design-student-centric-web-application
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to CampusNet</h1>
            <p className="py-6">Your portal to campus communities, events and more.</p>
            <Link href="/posts" className="btn btn-primary">Explore Posts</Link>
          </div>
        </div>
      </div>
 main
    </>
  );
}
