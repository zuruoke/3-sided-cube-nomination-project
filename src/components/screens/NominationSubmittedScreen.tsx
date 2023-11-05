'use client';

import React, { use } from 'react';
import CustomButton from '../utils/buttons/Buttons';
import Image from 'next/image';
import { anonymous, poppins } from '@/app/layout';
import { useRouter } from 'next/navigation';

const NominationSubmittedScreen: React.FC = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center h-3/4 mt-10 mb-28 pb-7 bg-white'>
      {/* Group photo */}
      <Image
        width={800}
        height={800}
        src='/nomination_submitted.png'
        alt='Group Photo'
        className='w-full h-[305px] object-cover mb-9'
      />

      {/* Nomination submitted text */}
      <div className='text-center mb-8'>
        <h1
          className={`text-3xl font-bold mb-4 text-black ${poppins.className}`}
        >
          NOMINATION SUBMITTED
        </h1>
        <p
          className={`text-base tracking-tight ${anonymous.className} text-gray-700`}
        >
          Thank you for taking the time to fill out this form! Why not <br />{' '}
          nominate another cube?
        </p>
      </div>

      {/* Buttons */}
      <div className='flex space-x-4 mb-3'>
        <CustomButton
          onClick={() => router.push('/nominations')}
          text='VIEW NOMINATIONS'
          additionalStyles='hover:bg-green-600 bg-white text-black py-2 text-sm px-8 w-[223px] h-[50px] outline outline-2'
        />
        <CustomButton
          onClick={() => router.push('/enterNominee')}
          text='CREATE NEW NOMINATION'
          additionalStyles='bg-white text-black hover:text-white hover:bg-blue-600 text-sm py-2 px-2 w-[223px] h-[50px] outline outline-2'
        />
      </div>
    </div>
  );
};

export default NominationSubmittedScreen;