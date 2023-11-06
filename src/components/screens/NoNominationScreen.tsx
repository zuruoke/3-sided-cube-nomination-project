'use client';

import React from 'react';
import Image from 'next/image';
import { poppins } from '@/app/layout';
import CustomButton from '../utils/buttons/Buttons';
import { useRouter } from 'next/navigation';

const NoNominationScreen = () => {
  const router = useRouter();

  return (
    <div className='bg-white h-[40rem] mb-24 mt-11 pt-32 w-4/5 px-10'>
      <div>
        <div className='flex-col justify-center'>
          <div className='h-32 w-32 pt-8 ml-28'>
            <Image
              className='w-[88px] h-[62px] ml-96 object-contain'
              width={400}
              alt='inbox'
              height={400}
              src={'/no_content.png'}
            />
          </div>

          <div className=' mb-10 mt-12'>
            <h4
              className={`${poppins.className} text-2xl text-gray-600 text-center font-bold uppercase`}
            >
              once you submit a <br /> nomination, you will be able <br /> to
              view and edit it here.
            </h4>
          </div>

          <div className='flex mt-16 justify-center'>
            <CustomButton
              onClick={() => router.push('/enter-nominee')}
              text='CREATE NEW NOMINATION'
              additionalStyles='bg-black text-white py-3 px-3 w-[276px] h-[50px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNominationScreen;