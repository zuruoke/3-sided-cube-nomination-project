'use client';

import React from 'react';
import Image from 'next/image';
import { anonymous } from '@/app/layout';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  nominationsCount: number;
}

const Header: React.FC<HeaderProps> = ({ nominationsCount }) => {
  const router = useRouter();
  return (
    <header className='bg-black text-white px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <div
          onClick={() => router.push('/')}
          className='-ml-16 w-[334px] h-9 object-contain cursor-pointer'
        >
          <Image
            src='/Green.png'
            alt='3 SIDED CUBE'
            width={150}
            height={50}
            className='w-[334px] h-9 object-contain'
          />
        </div>
      </div>

      <div className='flex items-center underline underline-offset-[3px] hover:text-gray-400 cursor-pointer transition duration-300'
        onClick={() => router.push('/nominations')}
      >
        <span
          className={`text-sm font-light tracking-wide ${anonymous.className}`}
        >
          {`Your Nominations   (${nominationsCount})`}
        </span>
      </div>
    </header>
  );
};

export default Header;