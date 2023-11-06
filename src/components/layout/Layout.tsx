'use client'

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNominationsViewModel } from '@/view_model/hooks/useNominationsViewModel';


interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { nominationsCount } = useNominationsViewModel();

  return (
    <div className="layout-container bg-gradient-to-r from-[#A0FF1F] to-[#00ED71] flex-col h-full">
      <Header nominationsCount={nominationsCount} />
      <main className="flex-grow flex flex-col bg-custom-background bg-cover bg-repeat justify-center items-center -mb-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
