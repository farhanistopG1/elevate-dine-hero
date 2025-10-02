import React from "react";
import { Button } from "./ui/button";
import chefAlexandra from "@/assets/chef-alexandra.jpg";

interface AboutSectionProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ title, paragraph1, paragraph2 }) => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8">
              {title}
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {paragraph1}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {paragraph2}
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <Button variant="sage" size="lg" className="w-full sm:w-auto">
                Meet Our Team
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <img
                src={chefAlexandra}
                alt="Chef Alexandra Chen in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent - hidden on mobile */}
            <div className="hidden md:block absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};