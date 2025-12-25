import { Link } from "react-router-dom";
import {
  Dumbbell,
  Target,
  Scale,
  User,
  Zap,
  Apple,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle, increase power, and develop functional strength with our comprehensive weight training programs and expert guidance.",
  },
  {
    icon: Target,
    title: "Bodybuilding",
    description:
      "Sculpt your physique with specialized bodybuilding routines, competition prep, and posing coaching from experienced professionals.",
  },
  {
    icon: Scale,
    title: "Weight Loss Programs",
    description:
      "Achieve sustainable fat loss through customized training plans, metabolic conditioning, and ongoing support to reach your goals.",
  },
  {
    icon: User,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your unique needs, schedule, and fitness level. Maximize results with dedicated attention.",
  },
  {
    icon: Zap,
    title: "CrossFit / Functional Training",
    description:
      "High-intensity functional movements that build overall fitness, endurance, and athletic performance for everyday life.",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description:
      "Expert nutrition planning and meal guidance to fuel your workouts, optimize recovery, and support your transformation goals.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 opacity-0 animate-fade-up"
              style={{ animationFillMode: "forwards" }}
            >
              Our <span className="text-primary">Services</span>
            </h1>
            <p
              className="text-lg text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Comprehensive fitness programs designed to help you achieve your goals,
              whether you're a beginner or a seasoned athlete.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div
            className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Take the first step towards transforming your body and life.
              Our team is ready to help you achieve results you never thought possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 opacity-0 animate-fade-up"
              style={{ animationFillMode: "forwards" }}
            >
              Membership Options
            </h2>
            <p
              className="text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
            >
              Flexible plans to fit your lifestyle and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$49",
                features: ["Gym access", "Locker room", "Free weights area", "Cardio equipment"],
              },
              {
                name: "Pro",
                price: "$89",
                featured: true,
                features: [
                  "Everything in Basic",
                  "Group classes",
                  "Nutrition consultation",
                  "Fitness assessment",
                ],
              },
              {
                name: "Elite",
                price: "$149",
                features: [
                  "Everything in Pro",
                  "Personal training (4x/mo)",
                  "Recovery room access",
                  "Priority booking",
                ],
              },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-xl border transition-all duration-300 opacity-0 animate-fade-up ${
                  plan.featured
                    ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
                    : "bg-card border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: "forwards" }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Choose Plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
