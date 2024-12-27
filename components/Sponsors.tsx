import { Radar } from "lucide-react";
import { Button } from "./ui/button";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  { icon: <Radar size={34} />, name: "Sponsor 1" },
  { icon: <Radar size={34} />, name: "Sponsor 2" },
  { icon: <Radar size={34} />, name: "Sponsor 3" },
  { icon: <Radar size={34} />, name: "Sponsor 4" },
  { icon: <Radar size={34} />, name: "Sponsor 5" },
  { icon: <Radar size={34} />, name: "Sponsor 6" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="relative container py-24">
       <h2 className="text-md lg:text-xl font-bold mb-10 text-primary text-center">
          Investors and Supporters
        </h2>
      {/* Foreground Section */}
      <div className="relative z-10 text-center  backdrop-blur-lg p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
       
        <p className="text-muted-foreground">
        We’re looking for our first sponsor/investor to help us grow and make an impact. Want to join and support our journey?
        </p>
     <Button variant={'outline'} className="rounded-xl mt-5">
     Become a Sponsor ❤️
     </Button>
          
        
      </div>

      {/* Background Section */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 md:gap-8 blur-sm opacity-99">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-lg font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};