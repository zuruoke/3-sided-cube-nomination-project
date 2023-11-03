import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-8 lg:p-16">
            
            <div className="flex justify-center mb-8 border-b border-gray-600 pb-8">
                <Image
                    src="/Green.png"
                    alt="3 SIDED CUBE"
                    width={150}
                    height={50}
                />
            </div>
            
            <div className="flex justify-between mb-8 items-center">
                <div className="address-section flex space-x-8">
                    <div className="space-y-2">
                        <h4 className="font-bold uppercase">BOURNEMOUTH</h4>
                        <p>Telephone House</p>
                        <p>Bournemouth, BH1 3NE</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold uppercase">BOURNEMOUTH</h4>
                        <p>Telephone House</p>
                        <p>Bournemouth, BH1 3NE</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold uppercase">BOURNEMOUTH</h4>
                        <p>Telephone House</p>
                        <p>Bournemouth, BH1 3NE</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold uppercase">BOURNEMOUTH</h4>
                        <p>Telephone House</p>
                        <p>Bournemouth, BH1 3NE</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold uppercase mb-4">GET SOCIAL</h4>
                    <div className="social-icons flex space-x-6 mb-4">
                        {['Twitter', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map(icon => (
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group hover:text-gray-400"
                                key={icon}
                            >
                                <Image src={`/${icon}.png`} alt={icon} width={24} height={22} />
                                <span className="sr-only group-hover:underline">Link to {icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="copyright">
                    © 2023 3 Sided Cube
                </div>
                <div>
                    <p className="text-lg">Let's Build Tech For Good</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
