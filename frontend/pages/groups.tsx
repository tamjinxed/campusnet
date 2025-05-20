import Head from 'next/head';
import Layout from '../components/Layout';
import GroupCard from '../components/GroupCard';

const sampleGroups = [
  { name: 'Debating Club', description: 'Weekly debates and public speaking practice.' },
  { name: 'Robotics Club', description: 'Building and programming robots together.' },
];

export default function Groups() {
  return (
    <Layout>
      <Head>
        <title>Groups - CampusNet</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Student Groups</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleGroups.map((group) => (
          <GroupCard key={group.name} name={group.name} description={group.description} />
        ))}
      </div>
    </Layout>
  );
}
