import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/chat.png";
import image3 from "../assets/community.png";
import image4 from "../assets/ui.png";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "User-Friendly Experience",
    description:
      "Navigate Sapio with ease, thanks to its intuitive and accessible design.",
    image: image4,
  },
  {
    title: "Community Hub",
    description:
      "Connect, share, and grow within vibrant communities centered around your interests.",
    image: image3,
  },
  {
    title: "One-on-One Chats",
    description:
      "Engage in private conversations with like-minded individuals to build meaningful connections.",
    image: image,
  },
];

const featureList: string[] = [
  "User-friendly interface",
  "One-on-one chats",
  "Community hub",
  "Interest-based groups",
  "Event discovery",
  "Collaborative projects",
  "Personalized recommendations",
 
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                width={300}
                height={0}
                className="mx-auto object-contain"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};