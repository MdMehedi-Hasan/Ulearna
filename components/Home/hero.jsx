'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-12 md:py-24">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-[center_top_-1px] dark:bg-grid-small-white/[0.2]" />
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <div className={`transition-all duration-1000 ease-in-out transform ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter sm:text-4xl lg:text-8xl">
            Connect with the world on{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Ulearna
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
            Share moments, discover content, and build meaningful connections with friends and communities around the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button size="lg" className="text-md px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-md px-8">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className={`mt-12 md:mt-16 w-full max-w-5xl rounded-lg border bg-card shadow-lg transform transition-all duration-1000 ease-in-out ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="p-4 md:p-6 lg:p-8 rounded-lg bg-gradient-to-br from-background to-muted/80 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-card border transition-all hover:shadow-md">
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-card border transition-all hover:shadow-md">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-muted-foreground">Communities</div>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-card border transition-all hover:shadow-md">
                <div className="text-2xl font-bold">100M+</div>
                <div className="text-muted-foreground">Daily Posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}