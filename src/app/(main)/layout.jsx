import Footer from '@/Components/Footer/page';
import Navbar from '@/Components/Navbar/page';
import TopNavbar from '@/Components/TopNavbar/page';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;