import React from 'react';
import CustomButton from '../utils/buttons/Buttons';

const NominationSubmittedScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">

      {/* Group photo */}
      <img src="/nomination_submitted.png" alt="Group Photo" className="w-full h-1/2 object-cover mb-4" />

      {/* Nomination submitted text */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">NOMINATION SUBMITTED</h1>
        <p className="text-xl text-black">
          Thank you for taking the time to fill out this form! Why not nominate another cube?
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-8 mb-10">
        <CustomButton 
          text="VIEW NOMINATIONS" 
          additionalStyles="hover:bg-green-600 text-white py-2 px-8"
        />
        <CustomButton 
          text="CREATE NEW NOMINATION" 
          additionalStyles="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8"
        />
      </div>

    </div>
  );
};

export default NominationSubmittedScreen;
