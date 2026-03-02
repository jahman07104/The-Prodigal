import React, { useState } from "react";
import { X } from "lucide-react";

/**
 * ConsultationModal Component
 * 
 * Modal dialog for requesting a consultation.
 * Includes form validation and submission to Firebase.
 * 
 * Props:
 * - isOpen: Boolean - Controls modal visibility
 * - onClose: Function - Handler to close the modal
 * - onSubmit: Function - Handler for form submission
 */
const ConsultationModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email"
  });
  
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      await onSubmit(formData);
      setFormStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "", preferredContact: "email" });
      
      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setFormStatus(null);
      }, 2000);
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 id="modal-title" className="text-2xl font-black uppercase tracking-tight">
              Request Consultation
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-prodigal-gold"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <p className="text-slate-600 mb-6 leading-relaxed">
              Fill out this form and our team will reach out within 24-48 hours to discuss
              your reintegration journey and how we can help.
            </p>
            
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="consult-name" className="block font-bold text-sm text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="consult-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="consult-email" className="block font-bold text-sm text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="consult-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="consult-phone" className="block font-bold text-sm text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="consult-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                  placeholder="+1 (876) 123-4567"
                />
              </div>
              
              {/* Preferred Contact Method */}
              <div>
                <label htmlFor="consult-contact" className="block font-bold text-sm text-slate-700 mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="consult-contact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="either">Either</option>
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="consult-message" className="block font-bold text-sm text-slate-700 mb-2">
                  Tell us about your situation *
                </label>
                <textarea
                  id="consult-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-prodigal-green focus:outline-none transition-colors resize-none"
                  placeholder="e.g., I'm considering returning to Jamaica and need guidance on RR concessions, business setup, and property..."
                />
              </div>
              
              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-3 rounded-xl">
                  <p className="font-bold">✓ Request submitted successfully!</p>
                  <p className="text-sm mt-1">We'll be in touch within 24-48 hours.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-3 rounded-xl">
                  <p className="font-bold">✗ Error submitting request. Please try again.</p>
                </div>
              )}
              
              {/* Submit Button */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-slate-300 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-6 py-3 rounded-xl font-black uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-prodigal-gold ${
                    isSubmitting
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-prodigal-green text-white hover:bg-prodigal-green/90"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConsultationModal;
