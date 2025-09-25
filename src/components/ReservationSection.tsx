import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const ReservationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-none shadow-2xl bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Reserve Your Experience
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us for an unforgettable culinary journey. Our intimate dining room 
              accommodates just 40 guests each evening, ensuring personalized attention 
              and an exclusive atmosphere.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7 Days</div>
                <div className="text-muted-foreground">Open Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5:30 PM</div>
                <div className="text-muted-foreground">First Seating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40 Seats</div>
                <div className="text-muted-foreground">Intimate Setting</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="sage" size="lg" className="px-12 py-4">
                Book a Table
              </Button>
              <Button variant="outline-sage" size="lg" className="px-12 py-4">
                Private Events
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                For parties of 8 or more, please call us directly at{" "}
                <span className="text-primary font-medium">(555) 123-SAGE</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};