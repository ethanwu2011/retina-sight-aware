
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700">
            Interested in learning more about ForeSight or exploring collaboration opportunities? 
            Contact our team to start a conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-medium text-foresight-navy mb-4">Contact Information</h3>
              <p className="text-gray-700">
                University of Pittsburgh <br />
                Department of Medical Research <br />
                Pittsburgh, PA
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-foresight-navy mb-4">Research Opportunities</h3>
              <p className="text-gray-700">
                We're always looking for collaborators interested in advancing early cancer detection through innovative technologies.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="w-full h-32" />
              </div>
              
              <div>
                <Button 
                  className="w-full md:w-auto bg-foresight-navy hover:bg-foresight-navy/90 text-white border-none"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
