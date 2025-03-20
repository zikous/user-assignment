"use client";

import { useState } from 'react';
import { createUser } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function useCreateUser() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleCreateUser = async (data) => {
    try {
      await createUser(data);
      router.push('/');
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Failed to create user. Please try again.');
    }
  };

  return { error, handleCreateUser };
}