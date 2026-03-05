import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import FloatingAvatar from "./components/FloatingAvatar";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Community from "./pages/Community";
import { onAuthChange } from "./firebase/auth";
import { saveCommunitySignup, saveConsultationRequest } from "./firebase/auth";

/**
 * The Prodigal App - Main Application Component
 * 
 * Manages:
 * - Page routing (home, insights, community)
 * - User authentication state
 * - Consultation modal
 * - Community signup
 * - Scroll detection for navigation
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  // Track scroll position for navigation styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);
  
  // Handle consultation form submission
  const handleConsultationSubmit = async (consultData) => {
    await saveConsultationRequest(consultData);
  };
  
  // Handle community signup submission
  const handleCommunitySignup = async (signupData) => {
    await saveCommunitySignup(signupData);
  };
  
  // Navigate to community page
  const handleJoinCommunity = () => {
    setCurrentPage("community");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-prodigal-stone font-sans">
      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        scrolled={scrolled}
        onConsultClick={() => setConsultModalOpen(true)}
      />
      
      {/* Main Content */}
      <main>
        {currentPage === "home" && (
          <Home onJoinCommunity={handleJoinCommunity} />
        )}
        
        {currentPage === "insights" && <Insights />}
        
        {currentPage === "community" && (
          <Community onSignup={handleCommunitySignup} user={user} />
        )}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        onSubmit={handleConsultationSubmit}
      />
      
      {/* Floating Avatar Assistant */}
      <FloatingAvatar />
    </div>
  );
};

export default App;
