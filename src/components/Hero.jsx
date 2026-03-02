// import React from "react";
// import { Award } from "lucide-react";

// /**
//  * Hero Component
//  *
//  * Full-height hero section with:
//  * - Background image with overlay
//  * - Badge showing credentials
//  * - Large title with brand name
//  * - Description text
//  * - Call-to-action button
//  *
//  * Props:
//  * - onCtaClick: Function - Handler for CTA button click
//  */
// const Hero = ({ onCtaClick }) => {
//   return (
//     <section className="relative h-[95vh] flex items-center justify-center bg-black overflow-hidden text-white text-center">
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-br from-emerald-900/75 to-black/60" />

//       {/* Background Image */}
//       <img
//         src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1920"
//         className="absolute inset-0 w-full h-full object-cover opacity-60"
//         alt="Beautiful Jamaica landscape"
//       />

//       {/* Hero Content */}
//       <div className="relative z-20 max-w-4xl px-6 animate-fade-in">
//         {/* Badge */}
//         <div className="inline-flex items-center bg-white/10 px-5 py-2 rounded-full border border-white/20 mb-8">
//           <Award size={14} className="text-prodigal-gold mr-2" />
//           <span className="text-xs font-bold tracking-widest uppercase">
//             Diaspora Reintegration Experts
//           </span>
//         </div>

//         {/* Main Title */}
//         <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-6">
//           THE <span className="text-prodigal-gold">PRODIGAL.</span>
//         </h1>

//         {/* Description */}
//         <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
//           Monetize your global expertise in the land of your birth.
//           Retire into <strong className="font-semibold">purpose.</strong>
//         </p>

//         {/* CTA Button */}
//         <button
//           onClick={onCtaClick}
//           className="bg-white text-black px-12 py-5 rounded-3xl font-black text-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-prodigal-gold focus:ring-offset-2 focus:ring-offset-black"
//           aria-label="Join our community"
//         >
//           Join Community
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Video Element */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        
        playsInline
      >
        <source src="/prodigal-welcome_video.mp4" type="video/mp4" />
        {/* Fallback text if browser does not support video */}
        Your browser does not support the video tag.
      }
      </video>

      {/* Dark Overlay for Text Readability (optional, use if needed) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Foreground Content (Text and CTA) */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-yellow-400">The Prodigal</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
          We are dedicated to making the transition back home to Jamaica as smooth and pain-free as possible.
        </p>

        {/* Call to Action Button */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#logistics"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Start Your Return
          </a>
          <a
            href="#consultancy"
            className="inline-block px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Learn About Our Agency
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;