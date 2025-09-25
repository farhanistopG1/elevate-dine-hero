import React from "react";
import { Button } from "./ui/button";
import chefAlexandra from "@/assets/chef-alexandra.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Chef's Vision
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Sage, we believe that exceptional dining transcends mere sustenance. 
                Our culinary philosophy centers on celebrating the pure essence of each 
                ingredient while crafting memorable experiences that linger long after 
                the last bite.
              </p>
              <p>
                Executive Chef Alexandra Chen brings over two decades of culinary excellence 
                to every plate. Trained in both classical French techniques and modern 
                molecular gastronomy, she creates dishes that honor tradition while 
                embracing innovation.
              </p>
              <p>
                Our commitment to sustainability means partnering with local farmers and 
                purveyors who share our passion for quality. Every element on your plate 
                tells the story of our region's bounty, prepared with meticulous attention 
                to detail and presented with artistic flair.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="sage" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={chefAlexandra}
                alt="Chef Alexandra Chen in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};