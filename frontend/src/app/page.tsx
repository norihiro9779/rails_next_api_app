import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/user">
            <div>create user</div>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}