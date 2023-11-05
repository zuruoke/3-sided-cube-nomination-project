import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout-container bg-custom-background bg-cover flex flex-col h-screen'>
      <Header nominationsCount={3} />

      <main className='flex-grow flex flex-col justify-center items-center -mb-8'>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;