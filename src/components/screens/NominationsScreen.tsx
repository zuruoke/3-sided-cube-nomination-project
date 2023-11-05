import { poppins } from '@/app/layout';
import SubmissionsTile from '../nomination/SubmissionTile';

const NominationsScreen: React.FC = () => {
  const nominations = [
    {
      nominee: 'David Jones',
      dateSubmitted: '21/10/23',
      reason: 'Lorem ipsum dolor sit amet, consectet desu...',
      processStatus: 'Fair',
    },
    {
      nominee: 'Elliot Coleman',
      dateSubmitted: '12/10/23',
      reason: 'Lorem ipsum dolor sit amet, consectet desu...',
      processStatus: 'Fair',
    },
    {
      nominee: 'Lucia Pauline J...',
      dateSubmitted: '11/03/23',
      reason: 'Lorem ipsum dolor sit amet, consectet desu...',
      processStatus: 'Fair',
    },
    // Add more nominations as needed
  ];

  return (
    <div className='mb-28'>
      <h1
        className={`${poppins.className} text-black text-3xl mb-10 font-bold`}
      >
        YOUR NOMINATIONS
      </h1>
      <div className='bg-white max-h-screen h-[40rem] pt-0 py-3'>
        <div className='max-w-5xl w-[90rem]'>
          {/* Headers */}
          <div
            className={`flex justify-between ${poppins.className} text-lg bg-gray-50 px-5 py-3 text-start items-center text-black font-semibold`}
          >
            <p className='w-1/4'>NOMINEE</p>
            <p className='w-1/4'>DATE SUBMITTED</p>
            <p className='w-1/4'>REASON</p>
            <p className='w-1/4'>PROCESS</p>
          </div>

          {/* List of nominations */}
          {nominations.map((nomination, index) => (
            <SubmissionsTile
              key={index}
              nominee={nomination.nominee}
              dateSubmitted={nomination.dateSubmitted}
              reason={nomination.reason}
              processStatus={nomination.processStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NominationsScreen;