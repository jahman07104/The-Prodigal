import React from "react";

/**
 * FeatureCard Component
 * 
 * Reusable card component to display features/benefits.
 * Includes hover animation and supports custom icon and color.
 * 
 * Props:
 * - icon: ReactElement - Lucide icon component
 * - iconColor: String - Tailwind color class for the icon
 * - title: String - Feature heading
 * - description: String - Feature description text
 */
const FeatureCard = ({ icon: Icon, iconColor, title, description }) => {
  return (
    <article className="bg-white p-12 rounded-[2.5rem] border border-slate-100 text-center transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <Icon size={48} className={iconColor} aria-hidden="true" />
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-600 leading-relaxed font-medium">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
