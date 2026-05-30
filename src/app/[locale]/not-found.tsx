import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <Link href="/ru" className="mt-6 inline-block text-academy-red">AIFC Academy</Link>
    </div>
  );
}
