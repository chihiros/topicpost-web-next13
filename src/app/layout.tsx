import type { Metadata } from 'next'
import Provider from '@/app/provider';
import Sidebar from '@/components/organisms/Sidebar';
import './global.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={``}>
        <Provider>
          {/* Sidebarを追加する */}
          <Sidebar />
          {/* メインコンテツ部分を追加する */}
          <div className="p-3 lg:ml-64">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
