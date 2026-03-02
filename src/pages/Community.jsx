import React, { useState } from "react";
import { Users, MessageSquare, Calendar, Shield, Heart, Briefcase } from "lucide-react";

/**
 * Community Page Component
 * 
 * Features community benefits, member testimonials, and signup form.
 * Showcases the value of joining The Prodigal community.
 * 
 * Props:
 * - onSignup: Function - Handler for signup form submission
 * - user: Object - Current authenticated user (null if not logged in)
 */
const Community = ({ onSignup, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentLocation: "",
    expertise: ""
  });
  
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSignup(formData);
      setFormStatus('success');
      setFormData({ name: "", email: "", phone: "", currentLocation: "", expertise: "" });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const communityFeatures = [
    {
      icon: MessageSquare,
      title: "Private Forum Access",
      description: "Connect with verified diaspora members, share insights, and get advice from those who've successfully reintegrated."
    },
    {
      icon: Calendar,
      title: "Monthly Webinars",
      description: "Expert-led sessions on RR concessions, property law, business setup, and wealth management in Jamaica."
    },
    {
      icon: Briefcase,
      title: "Job & Partnership Board",
      description: "Exclusive access to opportunities in Jamaica's growth sectors and partnerships with local businesses."
    },
    {
      icon: Shield,
      title: "Verified Vendor Network",
      description: "Trusted contacts for customs brokers, lawyers, real estate agents, and business consultants."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Thompson",
      role: "Real Estate Developer",
      quote: "The community connections helped me avoid costly mistakes during my property purchase. The vendor network alone saved me thousands.",
      location: "Kingston"
    },
    {
      name: "David Campbell",
      role: "Tech Entrepreneur",
      quote: "Within 3 months of joining, I had my business registered, office space secured, and two local partnerships in place. Game changer.",
      location: "Montego Bay"
    },
    {
      name: "Lisa Morgan",
      role: "Healthcare Consultant",
      quote: "The monthly webinars on RR concessions were invaluable. I maximized my duty-free imports and connected with hospital administrators.",
      location: "Ocho Rios"
    }
  ];

  return (
    <div className="pt-24 bg-prodigal-stone min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 to-prodigal-green text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Users size={64} className="mx-auto mb-6 text-prodigal-gold" />
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Join Our Community
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Connect with a verified network of diaspora professionals who are 
            monetizing their expertise in Jamaica.
          </p>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tight">
            Community Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <article
                key={index}
                className="bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-prodigal-green transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-prodigal-green p-3 rounded-2xl flex-shrink-0">
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2">{feature.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart size={32} className="text-prodigal-gold" />
            <h2 className="text-4xl font-black text-center uppercase tracking-tight">
              Member Stories
            </h2>
          </div>
          <p className="text-center text-slate-600 mb-12">
            Hear from community members who've made the journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-prodigal-stone p-8 rounded-3xl border border-prodigal-green/20"
              >
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-prodigal-green rounded-full flex items-center justify-center text-white font-black">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-sm">{testimonial.name}</p>
                    <p className="text-xs text-prodigal-gold font-semibold">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-20 bg-prodigal-green">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-6 text-white uppercase">
            Get Started Today
          </h2>
          <p className="text-center text-slate-200 mb-10">
            Fill out the form below to join our community and start your reintegration journey.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-bold text-sm text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-bold text-sm text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-bold text-sm text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="+1 (876) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="currentLocation" className="block font-bold text-sm text-slate-700 mb-2">
                  Current Location *
                </label>
                <input
                  type="text"
                  id="currentLocation"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="e.g., New York, USA"
                />
              </div>
              
              <div>
                <label htmlFor="expertise" className="block font-bold text-sm text-slate-700 mb-2">
                  Your Expertise/Industry *
                </label>
                <textarea
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors resize-none"
                  placeholder="e.g., Financial Services, Healthcare Administration, Technology..."
                />
              </div>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-3 rounded-xl">
                  <p className="font-bold">✓ Success! Welcome to The Prodigal community.</p>
                  <p className="text-sm mt-1">Check your email for next steps.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-3 rounded-xl">
                  <p className="font-bold">✗ Error submitting form. Please try again.</p>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-prodigal-green text-white py-4 rounded-xl font-black text-lg uppercase tracking-wider hover:bg-prodigal-green/90 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-prodigal-gold"
              >
                Join Community
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Community;
