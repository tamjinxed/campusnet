import Head from 'next/head';
 zsadkj-codex/design-student-centric-web-application
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

const samplePosts = [
  { title: 'Welcome Week Highlights', content: 'Catch up on all the events from welcome week.' },
  { title: 'Robotics Club Meeting', content: 'Join us this Friday for a demo night.' },
];

export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>Posts - CampusNet</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Latest Posts</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map((post) => (
          <PostCard key={post.title} title={post.title} content={post.content} />
        ))}
      </div>
    </Layout>
 main
  );
}
