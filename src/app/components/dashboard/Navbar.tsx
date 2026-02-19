"use client";

import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Witaj w aplikacji</div>
      <div className="flex items-center gap-4">
        <button>
          <Bell size={20} />
        </button>
        <button className="flex items-center gap-2">
          <User size={20} />
          <span>Twoje konto</span>
        </button>
      </div>
    </header>
  );
}