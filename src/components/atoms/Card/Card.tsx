import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Twemoji from "@/components/atoms/Twemoji";

type CardProps = {
  title: string;
  created_at: string;
  href?: string;
  // onClick?: () => void;
  // className?: string;
};

const Card: React.FC<CardProps> = ({ title, created_at, href/* recreationId, data */ }) => {
  // 絵文字をランダムで生成する関数
  const randomEmoji = (seed: string) => {
    const emojiList = [
      '🎉', '🎊', '🎈', '🎁', '🎂',
      '🎄', '🎃', '🎆', '🎇', '🧨',
      '🎎', '🎏', '🎐', '🎑', '🧧',
      '🎀', '🎁', '🎗', '🎟', '🎫',
      '🎖', '🏆', '🏅', '🥇', '🥈',
      '🥉', '⚽️', '🏀', '🏈', '⚾️',
      '🥎', '🎾', '🏐', '🏉', '🥏',
      '🎱', '🏓', '🏸', '🏒', '🏑',
      '🥍', '🏏', '🥅', '⛳️', '🏹',
      '🎣', '🤿', '🥊', '🥋', '🎽',
      '🛹', '🛷', '⛸', '🥌', '🎿',
      '⛷', '🏂', '🪂', '🏋️‍♀️', '🏋️‍♂️',
      '🤼‍♀️', '🤼‍♂️', '🤸‍♀️', '🤸‍♂️', '⛹️‍♀️',
      '⛹️‍♂️', '🤺', '🤾‍♀️', '🤾‍♂️', '🏌️‍♀️',
      '🏌️‍♂️', '🏇', '🧘‍♀️', '🧘‍♂️', '🏄‍♀️',
      '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🤽‍♀️', '🤽',
      '🚣‍♀️', '🚣', '🧗‍♀️', '🧗‍♂️', '🚵‍♀️',
      '🚵‍♂️', '🚴‍♀️', '🚴‍♂️', '🏆', '🥇',
      '🥈', '🥉', '🏅', '🎖', '🏵',
      '🎗', '🎫', '🎟', '🎪', '🤹‍♀️',
      '🤹‍♂️', '🎭', '🩰', '🎨', '🎬',
      '🎤', '🎧', '🎼', '🎹', '🥁']

    const index = Math.floor(deterministicRandom(seed) * emojiList.length);
    return emojiList[index];
  }

  const deterministicRandom = (seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    return (hash & 0x7FFFFFFF) / 0x7FFFFFFF; // Convert to [0, 1] range
  }

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    return `${year}/${month}/${day}`;
  };

  const previewContent = (content: string) => {
    const preview = content.slice(0, 40);
    return (preview + '...');
  };

  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg">
      <Link href={`` + href}>
        <div className='bg-gray-100 rounded-t-lg h-32 flex justify-center items-center'>
          {/* ランダムでTwemojiを表示したい */}
          <span className='text-6xl'>
            <Twemoji
              icon={randomEmoji(created_at)}
            />
          </span>
        </div>
        <div className="p-5">
          <div className="mb-2 text-base font-bold tracking-tight text-gray-900">{title}</div>
          <p className="text-gray-700 text-left text-sm mb-1">{formatDate(created_at)}</p>
          <div className='flex items-center justify-end'>
            {/* <img
              src={data.edges.profile.icon_url}
              className='w-5 h-5 rounded inline'
              alt='ユーザーアイコン'
            /> */}
            {/* <Image
              src={data.edges.profile.icon_url}
              alt='ユーザーアイコン'
              width={20}
              height={20}
              className='rounded inline'
            /> */}
            {/* <span className='text-sm text-slate-800 pl-2'>{data.edges.profile.nickname}</span> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
