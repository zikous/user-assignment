import Link from 'next/link';

export default function UserList({ users, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No users found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 mt-1">{user.email}</p>
          <div className="mt-4 flex space-x-3">
            <Link href={`/users/${user.id}`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                View
              </button>
            </Link>
            <Link href={`/users/edit/${user.id}`}>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                Edit
              </button>
            </Link>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}