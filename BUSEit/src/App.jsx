import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ForBusyUsers from './components/ForBusyUsers/ForBusyUsers';
import Features from './components/Features/Features';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import JoinWaitingList from './components/JoinWaitingList/JoinWaitingList';
import WaitlistConfirmation from './components/WaitlistConfirmation/WaitlistConfirmation';
import Error404 from './components/Error404/Error404';
import './styles/designSystem.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Navbar />
              <main className="main-content">
                <HeroSection />
                <HowItWorks />
                <ForBusyUsers />
                <Features />
                <FAQs />
              </main>
              <Footer />
            </>
          } />

          {/* Join Waiting List Page */}
          <Route path="/join-waitlist" element={<JoinWaitingList />} />

          {/* Waitlist Confirmation Page */}
          <Route path="/waitlist-confirmation" element={<WaitlistConfirmation />} />

          {/* 404 Error Page - Catch all unmatched routes */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
