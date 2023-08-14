import React from 'react'
import Link from 'next/link'
import { LoginButton, Label } from './Parts'
import { sidebar } from '@/constants/sidebar'

const Sidebar = () => {
  // これする意味ないかも
  const SidebarStyle = "transition-transform -translate-x-full lg:translate-x-0";

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 w-64 h-screen shadow ${SidebarStyle}`}
      aria-label="Sidebar"
    >
      <div className="h-full py-4 overflow-y-auto bg-gray-50">
        <Link href="/" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </Link>

        {/* {isLoggedIn ? <SidebarLoggedIn /> : <SidebarLogin />} */}
        <LoginButton />

        {sidebar.map((label, index) => (
          <Label
            key={index}
            icon={label.icon}
            label={label.label}
            link={label.link}
          />
        ))}
        <div className="mt-4">
          <button
            // onClick={handleLogout}
            className="bg-slate-300 hover:bg-slate-700 text-white text-base font-bold py-2 px-4 rounded"
          >
            ログアウト
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
