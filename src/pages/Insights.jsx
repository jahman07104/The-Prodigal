import React from "react";
import { BookOpen, TrendingUp, Globe, Zap, DollarSign, Building } from "lucide-react";

/**
 * Insights Page Component
 * 
 * Displays market insights, success stories, and investment opportunities
 * for diaspora members considering reintegration.
 */
const Insights = () => {
  const successStories = [
    {
      name: "Dr. Sarah Chen",
      role: "Agricultural Tech Consultant",
      story: "After 15 years in Silicon Valley, I brought precision farming expertise to Jamaica's agribusiness sector. The RR concessions helped me import cutting-edge equipment duty-free.",
      impact: "Created 12 local jobs"
    },
    {
      name: "Marcus Williams",
      role: "Financial Services Strategist",
      story: "Leveraged my Wall Street experience to establish a boutique investment firm in Kingston. The JSE presented untapped opportunities that I could navigate with global insights.",
      impact: "$2M in managed assets"
    },
    {
      name: "Dr. Patricia Brown",
      role: "Healthcare Administrator",
      story: "Brought international hospital management SOPs to Jamaica's private health sector. My expertise has improved patient outcomes and operational efficiency.",
      impact: "3 hospitals transformed"
    }
  ];

  const marketOpportunities = [
    {
      icon: Building,
      sector: "Agribusiness & Food Tech",
      growth: "+18% annually",
      description: "Export-quality production, sustainable farming practices, and food processing innovations."
    },
    {
      icon: Globe,
      sector: "Knowledge Process Outsourcing",
      growth: "+25% annually",
      description: "Business analytics, legal services, and tech support for international clients."
    },
    {
      icon: DollarSign,
      sector: "Financial Services",
      growth: "+12% annually",
      description: "Investment management, fintech solutions, and wealth advisory for high-net-worth individuals."
    },
    {
      icon: Zap,
      sector: "Renewable Energy",
      growth: "+30% annually",
      description: "Solar installations, energy consulting, and sustainable infrastructure development."
    }
  ];

  return (
    <div className="pt-24 bg-prodigal-stone min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-prodigal-green to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <BookOpen size={64} className="mx-auto mb-6 text-prodigal-gold" />
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Market Insights
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Real stories and data-driven opportunities from diaspora professionals
            who've successfully reintegrated into Jamaica's growing economy.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-4 uppercase tracking-tight">
            Success Stories
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Meet professionals who've monetized their global expertise in Jamaica.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <article
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-prodigal-green rounded-full flex items-center justify-center text-white font-black text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{story.name}</h3>
                    <p className="text-sm text-prodigal-gold font-semibold">{story.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  "{story.story}"
                </p>
                
                <div className="bg-prodigal-stone px-4 py-2 rounded-full inline-block">
                  <p className="text-xs font-black text-prodigal-green uppercase">
                    Impact: {story.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-4 uppercase tracking-tight">
            High-Growth Sectors
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Jamaica's fastest-growing industries where your international expertise is valued.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketOpportunities.map((opportunity, index) => (
              <article
                key={index}
                className="bg-prodigal-stone p-8 rounded-3xl border-2 border-prodigal-green/20 hover:border-prodigal-green transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-prodigal-green p-3 rounded-2xl">
                    <opportunity.icon size={32} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-black text-xl">{opportunity.sector}</h3>
                      <span className="bg-prodigal-gold text-white px-3 py-1 rounded-full text-xs font-black">
                        {opportunity.growth}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {opportunity.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-prodigal-green text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <TrendingUp size={48} className="mx-auto mb-6 text-prodigal-gold" />
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Join our community of returning professionals and get personalized insights
            for your reintegration journey.
          </p>
          <button className="bg-white text-prodigal-green px-10 py-4 rounded-full font-black text-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-prodigal-gold focus:ring-offset-2 focus:ring-offset-prodigal-green">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Insights;
