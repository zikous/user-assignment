"use client";

import { useParams } from 'next/navigation';
import UserForm from '@/components/UserForm';
import LoadingSpinner from '@/components/LoadingSpinner';
import useEditUser from '@/hooks/useEditUser';

export default function EditUser() {
  const { id } = useParams();
  const { user, handleUpdateUser } = useEditUser(id);

  if (!user) return <LoadingSpinner />;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit User</h1>
      <UserForm onSubmit={handleUpdateUser} defaultValues={user} />
    </div>
  );
}