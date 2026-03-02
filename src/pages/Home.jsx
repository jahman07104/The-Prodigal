import React from "react";
import { TrendingUp, Shield, Users, CheckCircle } from "lucide-react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

/**
 * Home Page Component
 * 
 * Main landing page with:
 * - Hero section with CTA
 * - Three feature cards (Monetize, Risk Mitigation, Peer Network)
 * - Green value proposition section
 * 
 * Props:
 * - onJoinCommunity: Function - Handler when user clicks to join community
 */
const Home = ({ onJoinCommunity }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero onCtaClick={onJoinCommunity} />

      {/* Features Section */}
      <section className="py-24 bg-prodigal-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon={TrendingUp}
              iconColor="text-prodigal-green"
              title="Monetize Skills"
              description="Export international SOPs to Jamaican growth sectors like Agribusiness and KPO."
            />
            
            <FeatureCard
              icon={Shield}
              iconColor="text-prodigal-gold"
              title="Risk Mitigation"
              description="Navigate Customs and Land Titles with expert oversight and verified local partnerships."
            />
            
            <FeatureCard
              icon={Users}
              iconColor="text-blue-700"
              title="Peer Network"
              description="Connect with a verified community of fellow returnees sharing real-time leads."
            />
          </div>
        </div>
      </section>

      {/* Green Value Proposition Section */}
      <section className="bg-prodigal-green text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tight">
            Your expertise is Jamaica's <br />
            competitive advantage.
          </h2>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Benefit 1: RR Concessions */}
            <article className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <CheckCircle size={24} className="text-prodigal-gold mb-4" />
              <h3 className="font-black text-xl mb-2">
                Maximize RR Concessions
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Bring in your professional "Tools of Trade" duty-free to
                kickstart your local venture.
              </p>
            </article>
            
            {/* Benefit 2: Wealth Preservation */}
            <article className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <CheckCircle size={24} className="text-prodigal-gold mb-4" />
              <h3 className="font-black text-xl mb-2">
                Wealth Preservation
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Navigate the JSE to ensure your capital works as hard as
                you did overseas.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
