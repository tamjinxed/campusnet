import Link from 'next/link';
 zsadkj-codex/design-student-centric-web-application
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const linkClass = (path: string) => (router.pathname === path ? 'active' : '');

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          CampusNet
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/posts" className={linkClass('/posts')}>Posts</Link>
          </li>
          <li>
            <Link href="/events" className={linkClass('/events')}>Events</Link>
          </li>
          <li>
            <Link href="/groups" className={linkClass('/groups')}>Groups</Link>
          </li>
 main
        </ul>
      </div>
    </div>
  );
}
