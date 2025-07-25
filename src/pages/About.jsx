
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingActionButtons from './FloatingActionButtons';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '200+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Shield, label: 'Projects Completed', value: '100+' },
    { icon: Clock, label: 'Response Time', value: '24hrs' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every installation, ensuring maximum protection for your family and property.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Using only premium materials and professional installation techniques for long-lasting results.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Our dedicated team provides personalized service and ongoing support for all our clients.',
    },
    {
      icon: Target,
      title: 'Precision Work',
      description: 'Attention to detail in every project, ensuring perfect fit and optimal protection.',
    },
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded', description: 'Started with a vision to provide quality safety solutions' },
    { year: '2016', event: 'First 100 Installations', description: 'Reached our first major milestone in residential projects' },
    { year: '2018', event: 'Commercial Expansion', description: 'Expanded services to include commercial and industrial projects' },
    { year: '2020', event: 'Advanced Materials', description: 'Introduced weather-resistant and eco-friendly net materials' },
    { year: '2022', event: '500+ Happy Customers', description: 'Celebrated serving over 500 satisfied customers' },
    { year: '2024', event: 'Industry Leader', description: 'Recognized as a leading safety net provider in the region' },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Harsha Safety Nets Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in comprehensive safety solutions, protecting families and 
              properties with professional-grade safety nets and expert installation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, Harsha Safety Nets Services began with a simple mission: to provide 
                reliable, high-quality safety solutions that protect what matters most to our customers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown from a small local business to a trusted name in the 
                safety net industry, serving hundreds of satisfied customers across residential, 
                commercial, and industrial sectors.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence, combined with our expertise in anti-bird control and 
                safety net installation, has made us the preferred choice for customers seeking 
                reliable protection solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                alt="Varahi Bird Safety Nets team at work"
               src="https://images.unsplash.com/photo-1595937146232-e4e496429fea" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </div>
                        <CardTitle className="text-lg">{milestone.event}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals dedicated to providing the best safety solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img  
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    alt="Installation team leader"
                   src="https://images.unsplash.com/photo-1692578919818-8418a9390759" />
                  <CardTitle>Installation Team</CardTitle>
                  <CardDescription>Expert Installers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our certified installation team ensures precise, safe, and efficient 
                    installation of all safety net systems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img  
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    alt="Customer service representative"
                   src="https://images.unsplash.com/photo-1599326014852-e083419b6f65" />
                  <CardTitle>Customer Service</CardTitle>
                  <CardDescription>Support Specialists</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dedicated customer service team providing consultation, support, 
                    and maintenance services for all our clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img  
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    alt="Quality control inspector"
                   src="https://images.unsplash.com/photo-1571846553457-6e6899127980" />
                  <CardTitle>Quality Control</CardTitle>
                  <CardDescription>Quality Inspectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Quality control specialists ensuring every installation meets our 
                    high standards and safety requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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

export default About;
