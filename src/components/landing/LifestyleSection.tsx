import { Briefcase, Dumbbell, Users, Sun } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Working & Studying",
    description: "Stay refreshed and focused during long work or study sessions",
    image: "🎓",
  },
  {
    icon: Dumbbell,
    title: "Light Exercise",
    description: "Perfect hydration companion for your workout routine",
    image: "💪",
  },
  {
    icon: Users,
    title: "Hangouts & Social",
    description: "Share the freshness with friends at every gathering",
    image: "🎉",
  },
  {
    icon: Sun,
    title: "Hot Weather",
    description: "Beat the heat with our ice-cold refreshing drinks",
    image: "☀️",
  },
];

const LifestyleSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Perfect for <span className="text-gradient">Every Moment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're working, exercising, or just chilling with friends, Frush fits right into your lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group bg-card rounded-3xl p-6 border border-border hover-lift cursor-pointer text-center"
            >
              <div className="text-5xl mb-4">{useCase.image}</div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
