import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
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
      src={image} // Pass the imported StaticImageData
      alt="About feature"
      width={300} // Define width (responsive handling built-in)
      height={0} // Automatically maintain aspect ratio
      className="mx-auto object-contain"
    />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
