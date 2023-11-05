'use client';

import React, { useState } from 'react';
import Dropdown from '../utils/Dropdown';
import InputField from '../utils/forms/InputField';
import CustomButton from '../utils/buttons/Buttons';
import FairnessSlider from '../utils/Reactions';
import Image from 'next/image';
import { anonymous, poppins } from '@/app/layout';
import Modal from '../utils/alerts/Modal';
import { useRouter } from 'next/navigation';

const emojis = {
  'Very Unfair': '/very_unfair.png',
  Unfair: '/unfair.png',
  'Not Sure': '/not_sure.png',
  Fair: '/fair.png',
  'Very Fair': '/very_fair.png',
};

var open = true;

const EnterNomineeScreen: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // const queryClient = useQueryClient();
  // const queryKey = queryKeyFn({
  //   path: "/api/nominee",
  //   operationId: "cubeAcademyRetrieveNomineeList",
  //   variables: {} // Assuming no additional variables are needed
  // });
  // console.log(queryKey)
  // const cachedData = queryClient.getQueryData(queryKey);
  // console.log(cachedData);

  const router = useRouter();
  return (
    <div className='bg-white h-full mb-24 mt-11 pt-10 w-3/5 px-10'>
      <HeaderImage />
      <NominationSection />
      <ReasonSection />
      <FairnessSection />
      <NavigationButtons
        backOnClick={() => setOpenModal(true)}
        nextOnClick={() => router.push('/nominationOverview')}
      />
      <Modal
        isOpen={openModal}
        onConfirm={() => router.back()}
        onCancel={() => setOpenModal(false)}
        title='ARE YOU SURE?'
        description='If you leave this page, you will lose any progress made.'
        buttonText='YES, LEAVE PAGE'
      />
    </div>
  );
};

const HeaderImage: React.FC = () => (
  <div className='mb-7 object-cover'>
    <Image
      width={6000}
      height={1000}
      src='/enter_nominee.png'
      alt='Nominations'
      className='w-full h-48 object-contain'
    />
  </div>
);

const NominationSection: React.FC = () => (
  <div className='bg-white border-b border-gray-300 pb-16 mb-4'>
    <h2
      className={`text-2xl font-semibold mb-4 text-black ${poppins.className}`}
    >
      I&apos;D LIKE TO NOMINATE...
    </h2>
    <p
      className={`mb-8 text-gray-500 font-normal text-base text-wr ${anonymous.className}`}
    >
      Please select a cube who you feel has done something honourable this
      <br /> month or just all round has a great work ethic.
    </p>
    <Dropdown
      label="Cube's name"
      options={[]}
      onChange={handleDropdownChange}
    />
  </div>
);

const ReasonSection: React.FC = () => (
  <div className='bg-white pt-8 border-b border-gray-300 mb-10 pb-16'>
    <h2
      className={`text-2xl font-semibold mb-5 text-black ${poppins.className}`}
    >
      I&apos;D LIKE TO NOMINATE <span className='text-pink-500'>DAVID</span>{' '}
      BECAUSE...
    </h2>
    <p
      className={`mb-8 text-gray-500 ${anonymous.className} tracking-tight font-400  text-base`}
    >
      Please let us know why you think this cube deserves the &apos;cube of the{' '}
      <br />
      month&apos; title 🏆⭐️
    </p>
    <InputField
      defaultValue='Reasoning'
      placeholder='Type your reason here...'
    />
  </div>
);

const FairnessSection: React.FC = () => (
  <div className='[bg-white mb-10'>
    <h2
      className={`text-2xl ${poppins.className} font-semibold mb-5 text-black`}
    >
      IS HOW WE CURRENTLY RUN CUBE OF THE MONTH <br /> FAIR?
    </h2>
    <p
      className={`mb-4 text-gray-600 font-extralight text-base tracking-tight ${anonymous.className}`}
    >
      As you know, out of the nominees chosen, we spin a wheel to pick the{' '}
      <br /> cube of the month. What&apos;s your opinion on this method?
    </p>
    <FairnessSlider emojis={emojis} />
  </div>
);

const NavigationButtons = ({
  backOnClick,
  nextOnClick,
}: {
  backOnClick: () => void;
  nextOnClick: () => void;
}) => (
  <div className='flex justify-between items-center pb-7 pt-3 mb-2'>
    <CustomButton
      onClick={backOnClick}
      text='BACK'
      additionalStyles='mr-4 bg-white text-black outline outline-2 text-sm px-5 py-3 w-[104px] h-[50px] hover:text-white'
    />
    <CustomButton
      text='NEXT'
      additionalStyles='w-[223px] h-[50px] bg-black text-white disabled:bg-opacity-20'
      onClick={nextOnClick}
    />
  </div>
);

export default EnterNomineeScreen;
function handleDropdownChange(selected: string): void {
  throw new Error('Function not implemented.');
}