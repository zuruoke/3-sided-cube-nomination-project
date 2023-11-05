import React from 'react';
import NominationOverviewTile from '../nomination/NominationOverviewTile';
import CustomButton from '../utils/buttons/Buttons';
import { anonymous } from '@/app/layout';

const NominationOverviewScreen: React.FC = () => {
  return (
    <div className='mx-auto max-w-3xl px-9 py-8 h-[50rem] mb-32 bg-white shadow-lg'>
      {/* Top Image */}
      <img
        src='/nomination_overview.png'
        alt='Nomination'
        className='w-full h-[187px] object-cover'
      />

      <div className='text-center mt-6 mb-8 text-black'>
        <h1 className='text-3xl font-bold mb-5'>NOMINATION OVERVIEW</h1>
        <p className={`text-base ${anonymous.className} text-center`}>
          Thank you for taking the time to nominate a fellow cube. Please <br />{' '}
          check your answers before submitting.
        </p>
      </div>

      <NominationOverviewTile title='Cube’s Name' description='David' />
      <NominationOverviewTile
        title='Reasoning'
        description='David always goes above and beyond with all the work that he does. He’s also a lovey person to work with!'
      />
      <NominationOverviewTile
        title='Thoughts on Current Process'
        description='Very Fair'
      />

      {/* Using CustomButton here */}
      <CustomButton
        text='SUBMIT'
        additionalStyles='mt-7 mb-4 mx-auto block bg-black text-white w-[223px] h-[50px]'
      />
    </div>
  );
};

export default NominationOverviewScreen;