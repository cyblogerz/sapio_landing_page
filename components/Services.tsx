import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";
import Image from "next/image";
import { DeviceFrameset } from "react-device-frameset";
import scrchat from "../assets/scrchat.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Interest-Based Communities",
    description:
      "Join vibrant communities tailored to your passions—tech, science, sports, and beyond.",
    icon: <ChartIcon />,
  },
  {
    title: "One-on-One Connections",
    description:
      "Engage in meaningful private conversations with people who share your interests.",
    icon: <WalletIcon />,
  },
  {
    title: "Event Discovery",
    description:
      "Find and participate in events, meetups, and hackathons to connect with others.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32 flex ">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Empowering{" "}
            </span>
            Connections
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Sapio offers tools to connect, collaborate, and grow in communities
            built around shared interests.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* <Image
          src={cubeLeg} // Existing image
          alt="Empowering Connections"
          width={600}
          height={0}
          className="object-contain"
          priority
        /> */}
<div className="lg:ml-20 overflow-hidden">
<DeviceFrameset
      
      device="iPhone X" // Use a device frame (e.g., iPhone 8, iPhone X)
      color="black" // Frame color
      width={400} // Adjust the mockup width
      

    >
      <Image
        src={scrchat}
        alt="App Screenshot"
        width={500}
        height={600}
        className="w-full h-full object-cover"
      />
    </DeviceFrameset>
      </div>
      </div>
    </section>
  );
};