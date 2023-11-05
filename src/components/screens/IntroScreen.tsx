'use client';

import React from 'react';
import CustomButton from '../utils/buttons/Buttons';
import { anonymous, poppins } from '@/app/layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const IntroScreen: React.FC = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col bg-white items-center h-[591px] max-w-full mx-auto'>
      <Image
        width={700}
        height={400}
        src='/intro_screen.png'
        alt='Cube Nominations'
        className='w-full h-auto max-h-[300px] object-cover'
      />
      <div className='p-8 flex flex-col bg-white justify-center items-center w-full'>
        <h1
          className={`text-3xl mb-6 text-black tracking-wide font-bold text-center ${poppins.className}`}
        >
          CUBE OF THE MONTH NOMINATIONS
        </h1>
        <p
          className={`text-base text-gray-600 mb-9 font-thin text-center tracking-tight max-w-xl ${anonymous.className}`}
        >
          At cube we’re passionate about recognising the great work that our
          cubes do. Each month one of our cubes are crowned cube of the month
          👑⭐️. Please nominate who you think deserves this months title.
        </p>
        <CustomButton
          text='GET STARTED'
          additionalStyles='w-[286px] h-[50px] bg-black text-white border-none px-8 py-3 text-sm'
          onClick={() => router.push('/enterNominee')}
        />
      </div>
    </div>
  );
};

export default IntroScreen;