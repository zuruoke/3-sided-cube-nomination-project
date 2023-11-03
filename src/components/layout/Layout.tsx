import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container bg-custom-background">
      <Header nominationsCount={3} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
