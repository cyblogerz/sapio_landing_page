import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Find Your People",
    description:
      "Discover communities tailored to your interests—tech, science, sports, and more.",
  },
  {
    icon: <MapIcon />,
    title: "Explore Communities",
    description:
      "Navigate through diverse groups and connect with like-minded individuals.",
  },
  {
    icon: <PlaneIcon />,
    title: "Opportunities Await",
    description:
      "Uncover events, meetups, and projects to expand your horizons.",
  },
  {
    icon: <GiftIcon />,
    title: "Engage and Earn",
    description:
      "Participate in challenges, earn rewards, and track your contributions.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-16 text-xl text-muted-foreground">
        Sapio is simple—connect, explore, and grow with communities that share your passions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};