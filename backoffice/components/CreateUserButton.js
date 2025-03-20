import Link from 'next/link';

export default function CreateUserButton() {
  return (
    <Link href="/users/create">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
        Create New User
      </button>
    </Link>
  );
}