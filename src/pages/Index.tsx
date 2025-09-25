import React, { useState, useEffect } from "react";
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

// --- START: DYNAMIC DATA LOGIC ---

// 1. Define the structure for your client data
interface ClientData {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
}

// 2. Define the default content for your "Sage" website
const defaultContent: ClientData = {
  hero: {
    title: "Sage",
    subtitle: "Modern cuisine with timeless flavors",
    ctaPrimary: "View Menu", // You might want to update this if your component uses it
    ctaSecondary: "Book a Table" // And this one too
  },
  about: {
    title: "A Culinary Journey Awaits", // Default "About" title
    paragraph1: "At Sage, we blend tradition with innovation to create unforgettable dishes. Our philosophy is rooted in using the freshest, locally-sourced ingredients to craft a menu that is both sophisticated and approachable.",
    paragraph2: "Our commitment to quality is unwavering, from the kitchen to your table. We invite you to join us for an evening of culinary excellence in an atmosphere of relaxed elegance."
  }
};

// --- END: DYNAMIC DATA LOGIC ---

const Index = () => {
  // --- START: STATE AND EFFECT HOOKS ---
  const [content, setContent] = useState<ClientData>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const clientHandle = params.get('client');

    if (clientHandle) {
      const dataUrl = `/clients/${clientHandle}.json`;
      fetch(dataUrl)
        .then(response => {
          if (!response.ok) throw new Error('Client data not found');
          return response.json();
        })
        .then((data: ClientData) => setContent(data))
        .catch(error => console.error("Could not load client data, showing default.", error))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);
  // --- END: STATE AND EFFECT HOOKS ---

  const heroImages = [
    heroDish1, heroInterior1, heroCocktail1, heroDessert1,
    heroIngredients1, heroWine1, heroChef1,
  ];

  const stats = [
    { value: "Michelin", label: "Star Awarded" },
    { value: "15+", label: "Years Excellence" },
    { value: "Local", label: "Sourced Ingredients" },
  ];

  const handleReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '10rem' }}>Loading Preview...</div>;
  }

  return (
    <div className="scroll-smooth">
      {/* Hero Section - NOW DYNAMIC */}
      <HeroCollage
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        stats={stats}
        images={heroImages}
        onReservation={handleReservation}
      />

      {/* Menu Preview */}
      <MenuPreview />

      {/* About Section - NOW DYNAMIC */}
      {/* Note: You may need to modify your <AboutSection /> component to accept these props */}
      <AboutSection 
        title={content.about.title}
        paragraph1={content.about.paragraph1}
        paragraph2={content.about.paragraph2}
      />

      {/* Reservation Section */}
      <div id="reservation">
        <ReservationSection />
      </div>
    </div>
  );
};

export default Index;
