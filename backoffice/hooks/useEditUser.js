"use client";

import { useEffect, useState } from 'react';
import { getUserById, updateUser } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function useEditUser(id) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  const handleUpdateUser = async (data) => {
    await updateUser(id, data);
    router.push('/');
  };

  return { user, handleUpdateUser };
}