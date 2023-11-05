'use client'

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useCubeAcademyRetrieveNomineeList } from '@/model/api/apiComponents';
import { _fetcherOptions } from '@/model/utils/constants';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    data: nominees,
    isLoading,
    isError,
    error
  } = useCubeAcademyRetrieveNomineeList(_fetcherOptions);

  // Calculate nominationsCount based on the loading state and the presence of data
  const nominationsCount = isLoading || isError ? 0 : nominees?.data?.length || 0;
  return (
    <div
      className={`layout-container bg-custom-background bg-green-500 bg-cover flex flex-col h-full`}
    >
      <Header nominationsCount={nominationsCount} />

      <main className='flex-grow flex flex-col justify-center items-center -mb-8'>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
