'use client';

import { poppins } from '@/app/layout';
import SubmissionsTile from '../nomination/SubmissionTile';
import Modal from '../utils/alerts/Modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchCubeAcademyGetAllNominations, fetchCubeAcademyRetrieveNomineeList, useCubeAcademyDeleteNomination, useCubeAcademyGetAllNominations } from '@/model/api/apiComponents';
import { _fetcherOptions } from '@/model/utils/constants';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeyFn } from '@/model/api/apiContext';
import { Nomination, Nominations, Nominee } from '@/model/api/apiResponses';
import { useNominationsViewModel } from '@/view_model/hooks/useNominationsViewModel';
import { useNomineeViewModel } from '@/view_model/hooks/useNomineeViewModel';
import NoNominationScreen from './NoNominationScreen';

const NominationsScreen: React.FC = () => {

  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    nominationsCount,
    isLoading,
    nominations
  } = useNominationsViewModel();


  const {
    nominees,
    error
  } = useNomineeViewModel();

 function findNameById(value: string | undefined) {
  const nominee = nominees?.data?.find(item => item.nominee_id === value);

  // Return the first name if the nominee is found, otherwise return undefined
  return nominee ? nominee.first_name : undefined;
}

const { mutate, isPending, isError } = useCubeAcademyDeleteNomination();

  const queryKey = queryKeyFn({
      path: "/api/nomination",
      operationId: "cubeAcademyGetAllNominations",
      variables: {},
  });

const handleSubmit = () => {
  if (currentNominationId) {
    mutate({
      'pathParams': { nominationId: currentNominationId },
      'headers': {
        'authorization': 'Bearer 476|QODMS8Au5t3RJsrTFeTbXPdnckz9D5l3iDzECmDWd09d14cc'
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey});
      },
      onError: () => {
      },
    });
    // Reset or handle the current nomination ID if necessary
    setCurrentNominationId(null);
    setModalOpen(false); // Close the modal
  }
};


  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentNominationId, setCurrentNominationId] = useState(null);

  const handleDeleteClick = (nominationId: any) => {
    setCurrentNominationId(nominationId); // Set the current nomination ID
    setModalOpen(true); // Open the modal
  };

  if (nominations?.length == 0) {
    return NoNominationScreen();
  }

  return (
    <div className='mb-28 mt-10'>
      <h1 className={`${poppins.className} text-black text-3xl mb-7 font-bold`}>
        YOUR NOMINATIONS
      </h1>
      <div className='bg-white max-h-screen h-[40rem] pt-0 py-3'>
        <div className='max-w-7xl w-[90rem]'>
<div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full ">
      <div className="">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b text-black font-semibold">
            <tr>
              <th scope="col" className="text-md  text-gray-900 px-6 py-4 text-left">
                NOMINEE
              </th>
              <th scope="col" className="text-md  text-gray-900 px-6 py-4 text-left">
                DATE SUBMITTED
              </th>
              <th scope="col" className="text-md  text-gray-900 px-6 py-4 text-left">
                REASON
              </th>
              <th scope="col" className="text-md  text-gray-900 px-6 py-4 text-left">
                PROCESS
              </th>
              <th scope="col" className="text-md  text-gray-900 px-6 py-4 text-left">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {/* List of nominations */}
          {nominations?.map((nomination, index) => (
            <SubmissionsTile
              editOnClick={() => router.push('/enter-nominee')}
              deleteOnClick={() => handleDeleteClick(nomination.nomination_id)}
              key={nomination.nomination_id}
              nominee={ findNameById(nomination.nominee_id) || ''}
              dateSubmitted={nomination.date_submitted || ''}
              reason={nomination.reason || ''}
              processStatus={nomination.process || ''}
            />
          ))}
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
          
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        buttonText='YES, DELETE'
        title='DELETE THIS NOMINATION'
        description='If you delete this nomination, the nominee will no longer be put forward by you.'
        onCancel={() => setModalOpen(false)}
        onConfirm={() => handleSubmit()}
      />
    </div>
  );
};

export default NominationsScreen;

  