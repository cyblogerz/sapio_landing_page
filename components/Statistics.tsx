import { Book, Group, MessageCircle, Users } from "lucide-react";
import { Button } from "./ui/button";

export const Statistics = () => {
  return (
    <section id="statistics" className="py-8">
      <div className="  p0 max-w-md shadow-md">
      
        <div className="flex gap-4 flex-wrap">
          <Button variant="default" className="rounded-xl"> <Users/> the Team </Button>
          <Button variant="secondary" className="rounded-xl"> <Book /> Company story </Button>
          <Button variant="secondary" className="rounded-xl"><MessageCircle /> Contact us </Button>
        </div>
      </div>
    </section>
  );
};