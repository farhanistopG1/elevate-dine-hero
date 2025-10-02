import React from "react";
import { Button } from "./button";

interface HeroCollageProps {
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  images: string[];
  onReservation?: () => void;
}

export const HeroCollage: React.FC<HeroCollageProps> = ({
  title,
  subtitle,
  stats,
  images,
  onReservation,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      {/* Floating Image Collage - Optimized for Mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute rounded-lg md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl ${
              index % 2 === 0 ? "hero-float" : "hero-float-delayed"
            }`}
            style={{
              width: window.innerWidth < 768 
                ? index % 3 === 0 ? "120px" : index % 2 === 0 ? "100px" : "110px"
                : index % 3 === 0 ? "240px" : index % 2 === 0 ? "180px" : "200px",
              height: window.innerWidth < 768
                ? index % 3 === 0 ? "100px" : index % 2 === 0 ? "120px" : "90px"
                : index % 3 === 0 ? "180px" : index % 2 === 0 ? "240px" : "150px",
              left: `${10 + (index * 15) % 70}%`,
              top: `${20 + (index * 12) % 60}%`,
              opacity: window.innerWidth < 768 ? 0.4 : 0.6,
              zIndex: 1,
            }}
          >
            <img
              src={image}
              alt={`Restaurant ambiance ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-border/50 animate-scale-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 md:mb-6 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center min-w-[80px] sm:min-w-[100px] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              onClick={onReservation}
              variant="sage"
              size="lg"
              className="px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto text-sm md:text-base hover:scale-105 transition-transform duration-300"
            >
              Reserve Your Table
            </Button>
            <Button 
              variant="outline-sage"
              size="lg"
              className="px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto text-sm md:text-base hover:scale-105 transition-transform duration-300"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Smaller on Mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-primary rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};