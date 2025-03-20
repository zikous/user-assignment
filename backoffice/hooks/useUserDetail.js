"use client";

import { useEffect, useState } from 'react';
import { getUserById } from '@/lib/api';

export default function useUserDetail(id) {
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

  return { user };
}