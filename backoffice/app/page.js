"use client";

import UserList from '@/components/UserList';
import SearchBar from '@/components/SearchBar';
import CreateUserButton from '@/components/CreateUserButton';
import useUsers from '@/hooks/useUsers';
import LogoutButton from '@/components/LogoutButton';

export default function Home() {
  const { users, handleDelete, handleSearch } = useUsers();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users List</h1>
        <LogoutButton />
      </div>
      <div className="mb-6">
        <CreateUserButton />
      </div>
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
}