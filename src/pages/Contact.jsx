import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useLocation } from 'react-router-dom';
import FloatingActionButtons from './FloatingActionButtons';

const Contact = () => {
  const { toast } = useToast();
  const locationHook = useLocation(); // Renamed to avoid conflict with formData.location

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '', // This is for property location input
    message: ''
  });

  useEffect(() => {
    if (locationHook.state && locationHook.state.service) {
      setFormData(prev => ({ ...prev, service: locationHook.state.service }));
    }
  }, [locationHook.state]);


  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 79955 19988',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@harshasafetynetsservices.in',
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Beside skyline, Vinayaka garu apartment, Flat no: B1, Yendada, Visakhapatnam - 530045',
      description: 'Visit our office for consultation'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 8:00 AM - 7:00 PM',
      description: 'Sunday: Emergency service only'
    }
  ];

  const services = [
    'Children Safety Nets',
    'Anti-Bird Protection',
    'Pigeon Balcony Safety',
    'Monkey Safety Nets',
    'Apartment Safety Nets',
    'Glass Protection Nets',
    'Construction Safety Nets',
    'Swimming Pool Safety',
    'Cricket Practice Nets',
    'Maintenance Service',
    'Regular Inspection',
    'Repair & Replacement',
    'Scheduled Maintenance',
    'Emergency Service',
    'Basic Plan Maintenance Plan',
    'Standard Plan Maintenance Plan',
    'Premium Plan Maintenance Plan',
    'Custom Safety Net Solution',
    'Details for: Luxury Apartment Complex - Children Safety Nets',
    'Details for: Commercial Building - Anti-Bird Protection',
    'Details for: School Campus - Multi-Purpose Safety Nets',
    'Details for: Hospital Building - Comprehensive Safety Solution',
    'Details for: Industrial Warehouse - Construction Safety Nets',
    'Details for: Residential Villa - Monkey Safety Nets',
    'Details for: Swimming Pool Complex - Pool Safety Nets',
    'Details for: Cricket Academy - Practice Nets Installation',
    'Details for: New Project Installation',
    'General Maintenance Service',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill in all required fields (Name, Phone, and Service).",
        variant: "destructive"
      });
      return;
    }

    const consultationData = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    const existingConsultations = JSON.parse(localStorage.getItem('consultations') || '[]');
    existingConsultations.push(consultationData);
    localStorage.setItem('consultations', JSON.stringify(existingConsultations));

    toast({
      title: "✅ Consultation Request Submitted!",
      description: "Thank you! We'll contact you within 24 hours to schedule your free consultation.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our safety experts for a free consultation. We're here to help you 
              find the perfect safety net solution for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <info.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-2">{info.details}</p>
                    <CardDescription>{info.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get Free Consultation</CardTitle>
                  <CardDescription className="text-center">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Required *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="location">Property Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter your property location"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-bg" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Submit Consultation Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>Visit us for in-person consultation</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <img  
                      className="w-full h-full object-cover"
                      alt="Office location map"
                     src="https://images.unsplash.com/photo-1693305884918-4ca847aa59cd" />
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Harsha Safety Nets Services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Free consultation and site visit',
                      'Professional installation team',
                      'High-quality materials with warranty',
                      'Competitive pricing with no hidden costs',
                      'Quick response and flexible scheduling',
                      'Ongoing maintenance and support'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Emergency Service</CardTitle>
                  <CardDescription className="text-red-600">
                    Need urgent safety net repair or installation?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-800">24/7 Emergency Hotline</p>
                      <p className="text-red-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <p className="text-sm text-red-600">
                    Available for urgent safety concerns and emergency repairs outside regular business hours.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional safety net services across multiple locations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Rushikonda', 'Sagar Nagar', 'Beach Road', 'MVP Colony',
              'Dabagardens', 'Dwaraka nagar', 'Dondaparthy', 'Akkayapalem',
              'Murali nagar', 'sujatha nagar', 'Gopalapatnam', 'Marripalem'
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-700 font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <a
  href="https://wa.me/917995519988"
  className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.62 6l-1.6 5.84 6-1.57a11.93 11.93 0 005.98 1.56c6.63 0 12-5.37 12-12 0-3.18-1.24-6.18-3.48-8.52zm-8.52 18a10 10 0 01-5.06-1.4l-.36-.22-3.56.93.96-3.44-.23-.35a9.95 9.95 0 01-1.48-5.1c0-5.5 4.48-10 10-10s10 4.5 10 10-4.48 10-10 10zm5.32-7.26c-.28-.14-1.63-.8-1.88-.88-.25-.09-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.2-.6.07s-1.17-.43-2.23-1.37c-.82-.73-1.38-1.63-1.54-1.9s-.02-.42.12-.56c.13-.13.29-.34.43-.5.14-.17.18-.28.28-.47.09-.19.04-.36-.02-.5-.06-.13-.6-1.45-.82-1.99-.22-.54-.45-.47-.61-.48h-.52c-.17 0-.45.07-.69.34s-.91.88-.91 2.14.93 2.49 1.07 2.67c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.08 1.63-.67 1.86-1.31.23-.64.23-1.2.16-1.31-.06-.11-.23-.17-.51-.3z" />
  </svg>
</a>
<a
  href="tel:+917995519988"
  className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.01 2.99 13.93 2.99 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58.11.34.03.71-.24 1.01l-2.2 2.2z" />
  </svg>
</a>

    </div>
  );
};

export default Contact;