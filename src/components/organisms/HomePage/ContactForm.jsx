import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { InlineWidget } from 'react-calendly';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-base-100">
      <div className="container mx-auto px-4 w-full md:max-w-7xl">
        <h2 className="text-4xl/18 portrait:text-3xl/16 font-bold line text-center">
          Get in Touch
        </h2>
        <p className="text-base text-gray-600 m-auto portrait:ml-5 portrait:mr-5 text-center pb-5 mb-10">
          Schedule a meeting with our team of experts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 pt-10">
          <div>
              <h4 className='font-bold text-xl mb-5'>About Us</h4>
              <p>Owmers Media Group is a smedia solutions firm created in 2021 by business management expert Janco Damas along with software engineers Harold Hidalgo and Luis Marquez. Our purpose is to create meaningful relations with customers worldwide by providing adequate software-based solutions to operational challenges.</p>
              <p className='mt-5'>If you are looking for a reliable partner to address your business information technology needs, feel free to schedule a meeting with our team or reach out through email or WhatsApp and we will gladly assist you.</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-primary mr-3 text-xl" />
              <span>info@ownersmediagroup.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary mr-3 text-xl" />
              <span>Miami, FL</span>
            </div>
          </div>
          {/* Calendly Scheduler */}
          <div className="w-full h-[900px]">
            <InlineWidget
              url="https://calendly.com/contact-webwave/30min"
              styles={{ height: '100%' }}
              prefill={{ name: '', email: '' }}
              pageSettings={{
                hideEventTypeDetails: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}