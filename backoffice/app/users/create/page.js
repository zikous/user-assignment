"use client";

import UserForm from '@/components/UserForm';
import ErrorAlert from '@/components/ErrorAlert';
import useCreateUser from '@/hooks/useCreateUser';

export default function CreateUser() {
  const { error, handleCreateUser } = useCreateUser();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create User</h1>
      {error && <ErrorAlert error={error} />}
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
}