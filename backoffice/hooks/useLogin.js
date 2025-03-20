"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';

export default function useLogin() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password);

      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        router.push('/');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return { error, handleLogin };
}