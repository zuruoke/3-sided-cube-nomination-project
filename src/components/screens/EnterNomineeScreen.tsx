import React from 'react';
import Dropdown from '../utils/Dropdown';
import InputField from '../utils/forms/InputField';
import CustomButton from '../utils/buttons/Buttons';
import FairnessSlider from '../utils/Reactions';

const emojis = {
    'Very Unfair': '/very_unfair.png',
    'Unfair': '/unfair.png',
    'Not Sure': '/not_sure.png',
    'Fair': '/fair.png',
    'Very Fair': '/very_fair.png'
};

const EnterNomineeScreen: React.FC = () => {

    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <HeaderImage />
            <NominationSection />
            <ReasonSection />
            <FairnessSection />
            <NavigationButtons />
        </div>
    );
};

const HeaderImage: React.FC = () => (
    <div className="mb-12">
        <img 
            src="/enter_nominee.png" 
            alt="Nominations" 
            className="w-full h-48 object-cover rounded-lg shadow-lg" 
        />
    </div>
);

const NominationSection: React.FC = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-black">I'D LIKE TO NOMINATE...</h2>
        <p className="mb-8 text-black">
            Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.
        </p>
        <Dropdown 
            label="Cube's name" 
            options={[]} 
            onChange={handleDropdownChange} 
        />
    </div>
);

const ReasonSection: React.FC = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-black">I'D LIKE TO NOMINATE DAVID BECAUSE...</h2>
        <p className="mb-8 text-black">
            Please let us know why you think this cube deserves the 'cube of the month' title 🎉
        </p>
        <InputField defaultValue="Reasoning" placeholder="Type your reason here..." />
    </div>
);

const FairnessSection: React.FC = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-black">IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?</h2>
        <p className="mb-8 text-black">
            As you know, out of the nominees chosen, we spin a wheel to pick the cube of the month. What's your opinion on this method?
        </p>
        <FairnessSlider emojis={emojis} />
    </div>
);

const NavigationButtons: React.FC = () => (
    <div className="flex justify-between items-center">
        <CustomButton text="BACK" additionalStyles="mr-4" />
        <CustomButton text="NEXT" />
    </div>
);

export default EnterNomineeScreen;
function handleDropdownChange(selected: string): void {
    throw new Error('Function not implemented.');
}

