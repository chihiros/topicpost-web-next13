import React from 'react';
import Link from 'next/link';

export const Question: React.FC = () => {
  return (
    <div className="p-1 m-2">
      <Link href="/" target="_self" rel="noopener noreferrer">
        <div className="flex justify-center text-xs text-slate-500">ログインすると？</div>
      </Link>
    </div>
  );
}
