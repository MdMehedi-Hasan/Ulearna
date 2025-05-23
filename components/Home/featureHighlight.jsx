'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaBolt, FaShieldAlt } from 'react-icons/fa';

export default function FeatureHighlight() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <FaUsers className="h-10 w-10" />,
      title: "Connect with Friends",
      description: "Build your network and stay connected with friends, family, and colleagues."
    },
    {
      icon: <FaChartLine className="h-10 w-10" />,
      title: "Discover Trending Content",
      description: "Explore popular posts and stay updated with trending topics from around the world."
    },
    {
      icon: <FaBolt className="h-10 w-10" />,
      title: "Engage with Communities",
      description: "Join communities based on your interests and participate in meaningful discussions."
    },
    {
      icon: <FaShieldAlt className="h-10 w-10" />,
      title: "Private & Secure",
      description: "Your data is protected with advanced security measures and privacy controls."
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Ulearna?</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Join millions of people who use Ulearna to connect, share, and discover
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 text-primary mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}