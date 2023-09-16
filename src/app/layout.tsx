import type { Metadata } from 'next'
import Provider from '@/app/provider';
import Sidebar from '@/components/organisms/Sidebar';
import LoginModal from '@/components/organisms/Modal/Modal';
import { WindowSize } from '@/components/debug/WindowSize';
import { ToastContainer } from '@/utils/Toast';
import './global.css';

const siteName = 'TopicPost';
const description = 'TopicPostは、あなたの趣味を共有するためのSNSです。';
const url = 'https://stg.topicpost.net';

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: siteName,
    description: description,
    url: url,
    images: [
      {
        url: 'https://api-stg.topicpost.net/v1/og/recreation?id=21efc871-386a-45ea-9f18-c3fbe0775558.png',
        width: 1200,
        height: 630,
        alt: 'Og Image Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    site: '@com_index',
    creator: '@com_index',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={``}>
        <Provider>
          <ToastContainer />
          {/* Sidebarを追加する */}
          <Sidebar />
          {/* メインコンテツ部分を追加する */}
          <div className="p-3 lg:ml-64">
            {children}
          </div>
          {/* デバック用のコンポーネント */}
          <WindowSize />
          <LoginModal />
        </Provider>
      </body>
    </html>
  )
}
