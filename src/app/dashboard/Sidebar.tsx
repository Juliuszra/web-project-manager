"use client"; // bo będziemy używać stanu i interakcji

import Link from "next/link";
import { useState } from "react";
import { LayoutDashboard, ListTodo, GanttChart, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 h-screen ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className={`${isCollapsed ? "hidden" : "block"} text-xl font-bold`}>
          Projekt Manager
        </h1>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      <nav className="mt-4">
        <ul className="space-y-2 px-3">
          <li>
            <Link href="/" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
              <LayoutDashboard size={20} />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
              <ListTodo size={20} />
              {!isCollapsed && <span>Projekty</span>}
            </Link>
          </li>
          <li>
            <Link href="/timeline" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
              <GanttChart size={20} />
              {!isCollapsed && <span>Timeline</span>}
            </Link>
          </li>
          <li>
            <Link href="/users" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
              <Users size={20} />
              {!isCollapsed && <span>Użytkownicy</span>}
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
              <Settings size={20} />
              {!isCollapsed && <span>Ustawienia</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}