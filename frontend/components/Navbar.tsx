import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">CampusNet</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/groups">Groups</Link></li>
        </ul>
      </div>
    </div>
  );
}
