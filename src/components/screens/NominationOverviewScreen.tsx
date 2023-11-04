import React from 'react';
import NominationOverviewTile from '../nomination/NominationOverviewTile';
import CustomButton from '../utils/buttons/Buttons';

const NominationOverviewScreen: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-lg">
      {/* Top Image */}
      <img 
          src="/nomination_overview.png" 
          alt="Nomination" 
          className="w-full object-cover rounded-t-lg" 
          style={{ height: '300px' }}
      />

      <div className="text-center mt-12 text-black">
        <h1 className="text-4xl font-bold mb-6">NOMINATION OVERVIEW</h1>
        <p className="text-xl">
          Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting.
        </p>
      </div>
      
      <NominationOverviewTile title="Cube’s Name" description="David" />
      <NominationOverviewTile title="Reasoning" description="David always goes above and beyond with all the work that he does. He’s also a lovey person to work with!" />
      <NominationOverviewTile title="Thoughts on Current Process" description="Very Fair" />

      {/* Using CustomButton here */}
      <CustomButton 
        text="SUBMIT" 
        additionalStyles="mt-12 mb-6 mx-auto block"
      />

    </div> 
  );
};

export default NominationOverviewScreen;
