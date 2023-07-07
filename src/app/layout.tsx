import type { Metadata } from 'next'
import Provider from '@/app/provider';
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
          {children}
        </Provider>
      </body>
    </html>
  )
}
