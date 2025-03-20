"use client";

import { useParams } from 'next/navigation';
import useUserDetail from '@/hooks/useUserDetail';
import UserDetailContent from '@/components/UserDetailContent';

export default function UserDetail() {
  const { id } = useParams();
  const { user } = useUserDetail(id);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Detail</h1>
      <UserDetailContent user={user} />
    </div>
  );
}