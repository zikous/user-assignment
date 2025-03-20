"use client";

import useLogout from "@/hooks/useLogout";

export default function LogoutButton() {
  const handleLogout = useLogout();

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Logout
    </button>
  );
}
