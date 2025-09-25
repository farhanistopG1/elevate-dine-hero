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
      {/* Floating Image Collage */}
      <div className="absolute inset-0 pointer-events-none">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute rounded-2xl overflow-hidden shadow-2xl ${
              index % 2 === 0 ? "hero-float" : "hero-float-delayed"
            }`}
            style={{
              width: index % 3 === 0 ? "240px" : index % 2 === 0 ? "180px" : "200px",
              height: index % 3 === 0 ? "180px" : index % 2 === 0 ? "240px" : "150px",
              left: `${10 + (index * 15) % 70}%`,
              top: `${20 + (index * 12) % 60}%`,
              opacity: 0.6,
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-border/50">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onReservation}
              variant="sage"
              size="lg"
              className="px-10 py-4"
            >
              Reserve Your Table
            </Button>
            <Button 
              variant="outline-sage"
              size="lg"
              className="px-10 py-4"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};