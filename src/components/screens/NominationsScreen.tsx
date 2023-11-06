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

const NominationsScreen: React.FC = () => {

  const queryClient = useQueryClient();
  const router = useRouter();

  const queryKeyNominations = queryKeyFn({
    path: "/api/nomination",
    operationId: "cubeAcademyGetAllNominations",
    variables: {}
  });

  const queryKeyNominees = queryKeyFn({
    path: "/api/nominee",
    operationId: "cubeAcademyRetrieveNomineeList",
    variables: {}
  });

  useEffect(() => {
    console.log('called')
    // Define a function that will return a promise with the data
    const fetchData = () => {
      // Fetch data using your API method
      return fetchCubeAcademyGetAllNominations(_fetcherOptions);
    };
    const fetchData1 = () => {
      return fetchCubeAcademyRetrieveNomineeList(_fetcherOptions);
    }
  
    // Prefetch the query
    queryClient.prefetchQuery({
      queryKey: queryKeyNominations, // This is your unique query key
      queryFn: fetchData, // This is the function to fetch your data
      
    });

    queryClient.prefetchQuery({
      queryKey: queryKeyNominees,
      queryFn: fetchData1
    })
  
  }, [queryClient]);

  const cachedData: Nominations | undefined = queryClient.getQueryData(queryKeyNominations);


 const cachedDataNominee: Nominee | undefined = queryClient.getQueryData(queryKeyNominees);

 function findNameById(value: string | undefined) {
  const nominee = cachedDataNominee?.data?.find(item => item.nominee_id === value);

  // Return the first name if the nominee is found, otherwise return undefined
  return nominee ? nominee.first_name : undefined;
}

const { mutate, isPending, isError } = useCubeAcademyDeleteNomination();

const handleSubmit = (nomination_id: string) => {
  mutate({
    'pathParams': {nominationId: nomination_id},
    'headers': {
      'authorization': 'Bearer 476|QODMS8Au5t3RJsrTFeTbXPdnckz9D5l3iDzECmDWd09d14cc'
     },
  }, 
    {
    onSuccess: () => {
      // If the mutation is successful, navigate to the submitted page
      router.push('/nomination-submitted');
    },
    onError: () => {
    },
  });
};

  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
          {cachedData?.data?.map((nomination, index) => (
            <SubmissionsTile
              editOnClick={() => router.push('/enter-nominee')}
              deleteOnClick={() => setModalOpen(true)}
              key={index}
              nominee={findNameById(nomination.nominee_id) || ''}
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
        onConfirm={() => alert('DELETED')}
      />
    </div>
  );
};

export default NominationsScreen;