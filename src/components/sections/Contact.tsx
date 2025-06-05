import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { isValidEmail, isValidName, isValidMessage } from '../../utils/validation';
import { config } from '../../config';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
};

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername', // Replace with your GitHub URL
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn URL
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: `mailto:${config.contact.email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!isValidName(formData.name)) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!isValidMessage(formData.message)) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        config.emailJs.serviceId,
        config.emailJs.templateId,
        formRef.current!,
        config.emailJs.publicKey
      );
      setStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-gray-400 text-center mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border focus:ring-1 outline-none transition-colors ${
                  errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border focus:ring-1 outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border focus:ring-1 outline-none transition-colors resize-none ${
                  errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                status === 'sending'
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Error sending message. Please try again or contact directly via email.
              </p>
            )}
          </form>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Or connect with me on</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 