import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const ReservationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-none shadow-2xl bg-card/80 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Reserve Your Experience
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              Join us for an unforgettable culinary journey. Our intimate dining room 
              accommodates just 40 guests each evening, ensuring personalized attention 
              and an exclusive atmosphere.
            </p>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 md:mb-2">7 Days</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Open Weekly</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 md:mb-2">5:30 PM</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">First Seating</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 md:mb-2">40 Seats</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Intimate Setting</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button variant="sage" size="lg" className="px-8 sm:px-12 py-3 md:py-4 w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                Book a Table
              </Button>
              <Button variant="outline-sage" size="lg" className="px-8 sm:px-12 py-3 md:py-4 w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                Private Events
              </Button>
            </div>

            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground px-2">
                For parties of 8 or more, please call us directly at{" "}
                <span className="text-primary font-medium whitespace-nowrap">(555) 123-SAGE</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};