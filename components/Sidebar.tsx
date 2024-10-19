"use client"

import { Home, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn(
      "fixed left-0 top-16 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out transform md:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <nav className="mt-5">
        <Link href="/" className={cn(
          "flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
          pathname === "/" && "bg-gray-100 dark:bg-gray-700"
        )}>
          <Home className="mr-3 h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link href="/settings" className={cn(
          "flex items-center px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
          pathname === "/settings" && "bg-gray-100 dark:bg-gray-700"
        )}>
          <Settings className="mr-3 h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}