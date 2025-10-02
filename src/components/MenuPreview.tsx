import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const menuItems = [
  {
    name: "Seared Duck Breast",
    description: "With cherry reduction, roasted vegetables, and herb-infused jus",
    price: "$42",
    category: "Mains"
  },
  {
    name: "Atlantic Salmon",
    description: "Pan-seared with quinoa risotto and seasonal microgreens",
    price: "$38",
    category: "Mains"
  },
  {
    name: "Truffle Arancini",
    description: "Crispy risotto balls with truffle oil and parmesan",
    price: "$18",
    category: "Appetizers"
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm dark chocolate with vanilla bean ice cream",
    price: "$16",
    category: "Desserts"
  },
  {
    name: "Wild Mushroom Soup",
    description: "Creamy forest mushroom bisque with herb oil drizzle",
    price: "$14",
    category: "Appetizers"
  },
  {
    name: "Lamb Rack",
    description: "Herb-crusted with roasted root vegetables and red wine jus",
    price: "$48",
    category: "Mains"
  }
];

export const MenuPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Our Menu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Carefully crafted dishes using the finest seasonal ingredients, 
            each plate telling a story of culinary excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="text-xs sm:text-sm text-primary font-medium mb-2 md:mb-3 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-xl sm:text-2xl font-bold text-primary">
                  {item.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button variant="outline-sage" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};