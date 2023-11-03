import React from 'react';
import Image from 'next/image';

interface HeaderProps {
    nominationsCount: number;
}

const Header: React.FC<HeaderProps> = ({ nominationsCount }) => {
    return (
        <header className="bg-black text-white px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-between">
            
            <div className="flex items-center space-x-4">
                <div>
                    <Image
                        src="/Green.png" // Update this with the actual path to your logo
                        alt="3 SIDED CUBE"
                        width={150}
                        height={50}
                    />
                </div>
            </div>
            
            <div className="flex items-center space-x-4 hover:text-gray-400 cursor-pointer transition duration-300">
                <span className="text-lg font-semibold tracking-wide">Your Nominations</span>
                <span className="bg-white text-black rounded-full px-3 py-1 text-md">{nominationsCount}</span>
            </div>
        </header>
    );
}

export default Header;
