import { Leaf, Droplets, Apple, Zap } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Fresh",
    description: "Natural taste and refreshing sensation in every sip",
    color: "text-accent",
    bgColor: "bg-frush-green-light",
  },
  {
    icon: Droplets,
    title: "Light",
    description: "Easy to drink anytime, anywhere you go",
    color: "text-primary",
    bgColor: "bg-frush-yellow-light",
  },
  {
    icon: Apple,
    title: "Natural",
    description: "Real fruits, minimal processing, pure goodness",
    color: "text-secondary",
    bgColor: "bg-frush-red-light",
  },
  {
    icon: Zap,
    title: "Practical",
    description: "Ready to go, perfect for your busy lifestyle",
    color: "text-accent",
    bgColor: "bg-frush-green-light",
  },
];

const ValuesSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 gradient-fresh">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Frush?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in bringing you the freshest, most delicious fruit drinks that fit seamlessly into your lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-6 lg:p-8 hover-lift hover-glow cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
