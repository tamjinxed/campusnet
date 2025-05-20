import Head from 'next/head';
 zsadkj-codex/design-student-centric-web-application
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';

const sampleEvents = [
  { title: 'Hackathon 2025', date: 'May 30', description: 'Join teams from all faculties for a 24h coding challenge.' },
  { title: 'Career Fair', date: 'Jun 12', description: 'Meet potential employers and learn about internships.' },
];

export default function Events() {
  return (
    <Layout>
      <Head>
        <title>Events - CampusNet</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Upcoming Events</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleEvents.map((event) => (
          <EventCard key={event.title} title={event.title} date={event.date} description={event.description} />
        ))}
      </div>
    </Layout>
 main
  );
}
