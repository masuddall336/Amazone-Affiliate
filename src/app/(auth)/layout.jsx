import Footer from '@/Components/Footer/page';
import TopNavbar from '@/Components/TopNavbar/page';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      {children}
      <Footer/>
    </div>
  );
};

export default AuthLayout;