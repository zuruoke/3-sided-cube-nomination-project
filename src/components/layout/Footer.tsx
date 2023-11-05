import React from 'react';
import Image from 'next/image';
import { anonymous, poppins } from '@/app/layout';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black text-white pt-8 px-8 lg:pb-9 lg:px-36'>
      <div className='flex justify-left mb-8 border-b border-gray-300 pb-8'>
        <Image
          src='/Green.png'
          alt='3 SIDED CUBE'
          width={150}
          height={50}
          className='w-[196px] h-8'
        />
      </div>

      <div className='flex justify-between mb-8 items-center'>
        <div className='address-section flex gap-x-16'>
          <div className='space-y-1'>
            <h3 className={`font-bold uppercase text-xs ${poppins.className}`}>
              BOURNEMOUTH
            </h3>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              Telephone House
            </p>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              Bournemouth, BH1 3NE
            </p>
          </div>
          <div className='space-y-1'>
            <h3 className={`font-bold uppercase text-xs ${poppins.className}`}>
              LONDON
            </h3>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              51 Eastcheap
            </p>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              London, EC3M 1JP
            </p>
          </div>
          <div className='space-y-1'>
            <h3 className={`font-bold uppercase text-xs ${poppins.className}`}>
              WASHINGTON
            </h3>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              80 M Street SE
            </p>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              Washington, D.C 20003
            </p>
          </div>
          <div className='space-y-1'>
            <h3 className={`font-bold uppercase text-xs ${poppins.className}`}>
              FLORIDA
            </h3>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              7901 4th St N, STE 300
            </p>
            <p className={`font-normal text-xs ${anonymous.className}`}>
              St. Petersburg FL 33702
            </p>
          </div>
        </div>

        <div>
          <h4
            className={`font-bold uppercase mb-4 text-xs ${poppins.className}`}
          >
            GET SOCIAL
          </h4>
          <div className='social-icons flex space-x-3.5 w-[173px] h-[40px] mb-4'>
            {['Twitter', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map(
              (icon) => (
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group hover:text-gray-400'
                  key={icon}
                >
                  <Image
                    className='w-[173px] h-5'
                    src={`/${icon}.png`}
                    alt={icon}
                    width={24}
                    height={22}
                  />
                  <span className='sr-only group-hover:underline'>
                    Link to {icon}
                  </span>
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className={`copyright ${anonymous.className} font-bold text-xs`}>
          © 2023 3 Sided Cube
        </div>
        <div>
          <p className={`font-bold text-xs ${anonymous.className}`}>
            Let&apos;s Build Tech For Good
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;