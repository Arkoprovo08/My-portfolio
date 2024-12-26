import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import TopNavbar from '../Navbar/TopNavbar';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <TopNavbar />
      <HomeContent />      
    </div>
  )
}
