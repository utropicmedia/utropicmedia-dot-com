import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className="bg-gray-900 text-gray-50">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
