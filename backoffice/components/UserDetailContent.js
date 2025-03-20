export default function UserDetailContent({ user }) {
  if (!user)
    return <div className="text-center text-gray-500 py-8">Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h2>
      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Birthdate:</span> {user.birthdate}
        </p>
        <p>
          <span className="font-semibold">Created at:</span>{" "}
          {new Date(user.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
