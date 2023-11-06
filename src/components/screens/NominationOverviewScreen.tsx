'use client';

import React, { useEffect, useState } from 'react';
import NominationOverviewTile from '../nomination/NominationOverviewTile';
import CustomButton from '../utils/buttons/Buttons';
import { anonymous } from '@/app/layout';
import { useRouter } from 'next/navigation';
import { useCubeAcademyCreateNomination } from '@/model/api/apiComponents';
import { _fetcherOptions, formatEmojis } from '@/model/utils/constants';
import useNomineeState from '@/view_model/hooks/useNomineeState';

interface NominationState {
  name: string;
  reasoning: string;
  rating: string;
  nominee_id: string;
}



const NominationOverviewScreen: React.FC = () => {
  const router = useRouter();
  const [nomination, setNomination] = useState<NominationState>({
    name: '',
    reasoning: '',
    rating: '',
    nominee_id: ''
  });

  
  useEffect(() => {
    const nominationData = sessionStorage.getItem('nominationData');
    if (nominationData) {
      const parsedData = JSON.parse(nominationData);
      setNomination({
        name: parsedData.name || '',
        reasoning: parsedData.text || '',
        rating: parsedData.rating || '',
        nominee_id: parsedData.value
      });
    }
  }, []);

  // Using the mutation hook
  const { mutate, isPending, isError } = useCubeAcademyCreateNomination();

  const { 
    clearState 
  } = useNomineeState();



  const handleSubmit = () => {
    // Prepare the data for the mutation
    const nominationPayload = {
      id: nomination.nominee_id,
      reason: nomination.reasoning,
      process: nomination.rating,
    };

    // Call mutate to create the nomination
    mutate({
      'body': {
        'nominee_id': nominationPayload.id,
        'process': formatEmojis[nominationPayload.process],
        'reason': nominationPayload.reason
      },
       'headers': {
        'authorization': 'Bearer 476|QODMS8Au5t3RJsrTFeTbXPdnckz9D5l3iDzECmDWd09d14cc'
       }
    }, {
      onSuccess: () => {
        // If the mutation is successful, navigate to the submitted page
        router.push('/nomination-submitted');
        clearState();
      },
      onError: () => {
      },
    });
  };


  return (
    <div className='mx-auto max-w-3xl px-9 mt-8 py-8 h-[50rem] mb-32 bg-white shadow-lg'>
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

      <NominationOverviewTile title='Cube’s Name' description={nomination.name} />
      <NominationOverviewTile
        title='Reasoning'
        description={nomination.reasoning}
      />
      <NominationOverviewTile
        title='Thoughts on Current Process'
        description={nomination.rating}
      />

      {/* Using CustomButton here */}
      <CustomButton
        onClick={handleSubmit}
        text='SUBMIT'
        additionalStyles='mt-7 mb-4 mx-auto block bg-black text-white w-[223px] h-[50px]'
        disabled={isPending} // Disable the button while the mutation is in progress
      />
      {isError && <p>There was an error submitting the nomination. Please try again.</p>}
    </div>
  );
};

export default NominationOverviewScreen;