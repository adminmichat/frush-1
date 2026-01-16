import { Check, Leaf, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    text: "Made with real fruit",
  },
  {
    icon: Heart,
    text: "Minimal processing",
  },
  {
    icon: Sparkles,
    text: "Refreshing and light taste",
  },
];

const HealthSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-frush-green-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-primary">Natural</span> Commitment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the healthiest, most natural fruit drinks without compromising on taste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.text}
                className="bg-card rounded-2xl p-6 flex items-center gap-4 hover-lift"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-12 text-center">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              At Frush, we believe that what you drink matters. That's why we use only the finest, freshest fruits 
              sourced from trusted farms. Our drinks are carefully crafted with minimal processing to preserve 
              the natural vitamins, minerals, and flavors that make fresh fruit so special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
