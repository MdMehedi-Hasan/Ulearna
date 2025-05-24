"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Digital Marketing Specialist",
      avatar: "https://i.pravatar.cc/150?img=11",
      content:
        "Ulearna has transformed how I network with industry professionals. The platform's intuitive design makes sharing ideas and connecting with like-minded individuals seamless and enjoyable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "As a content creator, having a platform that showcases my work effectively is crucial. Ulearna provides exactly that, with amazing engagement features and a supportive community.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?img=12",
      content:
        "The developer-friendly community on Ulearna is unmatched. I've found collaborators for projects and mentors who've helped advance my career, all through this incredible platform.",
      rating: 4,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          What Our Users Say
        </h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Join thousands of satisfied users who have found value in our platform
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
