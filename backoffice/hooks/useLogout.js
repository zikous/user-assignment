"use client";

import { useRouter } from 'next/navigation';

export default function useLogout() {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    router.push('/login');
  };

  return handleLogout;
}