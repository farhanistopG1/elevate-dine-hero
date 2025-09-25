import React from "react";
import { HeroCollage } from "@/components/ui/modern-hero-section";
import { MenuPreview } from "@/components/MenuPreview";
import { AboutSection } from "@/components/AboutSection";
import { ReservationSection } from "@/components/ReservationSection";

// Import hero images
import heroDish1 from "@/assets/hero-dish-1.jpg";
import heroInterior1 from "@/assets/hero-interior-1.jpg";
import heroCocktail1 from "@/assets/hero-cocktail-1.jpg";
import heroDessert1 from "@/assets/hero-dessert-1.jpg";
import heroIngredients1 from "@/assets/hero-ingredients-1.jpg";
import heroWine1 from "@/assets/hero-wine-1.jpg";
import heroChef1 from "@/assets/hero-chef-1.jpg";

const Index = () => {
  const heroImages = [
    heroDish1,
    heroInterior1,
    heroCocktail1,
    heroDessert1,
    heroIngredients1,
    heroWine1,
    heroChef1,
  ];

  const stats = [
    { value: "Michelin", label: "Star Awarded" },
    { value: "15+", label: "Years Excellence" },
    { value: "Local", label: "Sourced Ingredients" },
  ];

  const handleReservation = () => {
    // Scroll to reservation section
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <HeroCollage
        title="Sage"
        subtitle="Modern cuisine with timeless flavors"
        stats={stats}
        images={heroImages}
        onReservation={handleReservation}
      />

      {/* Menu Preview */}
      <MenuPreview />

      {/* About Section */}
      <AboutSection />

      {/* Reservation Section */}
      <div id="reservation">
        <ReservationSection />
      </div>
    </div>
  );
};

export default Index;
