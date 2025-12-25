import { CheckCircle, Target, Users, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-gym.jpg";

const values = [
  {
    icon: Target,
    title: "Discipline",
    description: "Consistency breeds excellence. We build habits that last a lifetime.",
  },
  {
    icon: Users,
    title: "Community",
    description: "A supportive environment where everyone pushes each other to succeed.",
  },
  {
    icon: Trophy,
    title: "Results",
    description: "We measure success by the transformations we create every single day.",
  },
];

const achievements = [
  "Over 10 years of fitness excellence",
  "5,000+ successful transformations",
  "50+ certified professional trainers",
  "24/7 access for ultimate flexibility",
  "State-of-the-art equipment and facilities",
  "Personalized nutrition and training plans",
];

const About = () => {
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
              Who We <span className="text-primary">Are</span>
            </h1>
            <p
              className="text-lg text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              More than a gym — we're a community dedicated to transforming lives through
              fitness, discipline, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className="relative opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <img
                src={aboutImage}
                alt="IronForge Gym interior with modern equipment"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {[
                  { value: "2014", label: "Founded" },
                  { value: "15K", label: "Sq. Feet" },
                  { value: "100+", label: "Equipment" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card/80 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
                    <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div
              className="space-y-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Building Champions Since 2014
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                IronForge Gym was founded with a simple mission: to create a space where anyone,
                regardless of their starting point, could transform their body and life. What began
                as a small training facility has grown into one of the premier fitness destinations
                in the city.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified trainers brings decades of combined experience in strength
                training, bodybuilding, weight loss, and athletic performance. We believe that
                with the right guidance, equipment, and mindset, anyone can achieve extraordinary
                results.
              </p>

              {/* Achievement list */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${500 + index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 opacity-0 animate-fade-up"
              style={{ animationFillMode: "forwards" }}
            >
              Our Core Values
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
            >
              The principles that guide everything we do at IronForge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl bg-background border border-border opacity-0 animate-fade-up hover:border-primary/50 transition-colors duration-300"
                style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
