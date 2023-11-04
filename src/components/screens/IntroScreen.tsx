import React from 'react';
import CustomButton from '../utils/buttons/Buttons';

const IntroScreen: React.FC = () => {
    return (
        <div className="flex flex-col bg-gray-200 items-center max-w-full mx-auto">
            <img src="/intro_screen.png" alt="Cube Nominations" className="w-full h-auto max-h-[300px] object-cover"/>
            <div className="p-8 flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl mb-6 text-center">CUBE OF THE MONTH NOMINATIONS</h1>
                <p className="text-lg mb-6 text-center max-w-xl">
                    At cube we’re passionate about recognising the great work that our cubes do. Each month one of our cubes are crowned cube of the month 👑. Please nominate who you think deserves this months title.
                </p>
                <CustomButton text="GET STARTED" />
            </div>
        </div>
    );
}

export default IntroScreen;
