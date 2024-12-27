import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
        <Image
      src={pilot} // Pass the imported image
      alt="Pilot"
      width={300} // Desired width
      height={0} // Maintain aspect ratio (set height to 0 or remove it)
      className="object-contain rounded-lg"
    />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
               Sapio is a platform designed to help individuals connect, collaborate, and build meaningful communities. Whether you're a creator, a professional, or someone seeking to grow your network, Sapio provides the tools to find like-minded individuals, discover new opportunities, and work on projects that matter. Our mission is to create a space where ideas thrive, people connect, and innovation flourishes.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
