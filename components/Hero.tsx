import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { DeviceFrameset } from "react-device-frameset";
import Image from "next/image";

import mockup from "../assets/mockup.png";
import 'react-device-frameset/styles/marvel-devices.min.css'

export const Hero = () => {
  return (
    <section className="container grid max-h-[95vh] overflow-hidden lg:grid-cols-2 place-items-center  py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6 ">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Sapio
            </span>{" "}
            helps you 
          </h1>{" "}
          find{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              your
            </span>{" "}
            tribe 🫂
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Discover like-minded individuals, collaborate on meaningful projects, and grow with a supportive community.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3  text-lg
          
          rounded-xl">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 rounded-xl text-lg ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Device section */}
      
      <div className="absolute bottom-0 right-0 z-0">
    <Image
      src={mockup}
      alt="Phone in hand mockup"
      width={1080}
      height={1920}
      className="w-[auto] h-[auto] object-contain md:object-cover"
      priority
    />
  </div>
      

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
