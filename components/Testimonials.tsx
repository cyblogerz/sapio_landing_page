import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Johnson",
    userName: "@emily_beta",
    comment:
      "Sapio has completely transformed how I connect with like-minded people. It's so intuitive and easy to use!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Brown",
    userName: "@michael_beta",
    comment:
      "I joined a science community on Sapio and found collaborators for my project in no time. Amazing experience!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Lee",
    userName: "@sarah_beta",
    comment:
      "The one-on-one chat feature is a game-changer. I've had meaningful conversations with incredible people.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Smith",
    userName: "@james_beta",
    comment:
      "I discovered a local sports event through Sapio. It’s not just an app, it’s a gateway to new opportunities.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Olivia Martin",
    userName: "@olivia_beta",
    comment:
      "The event discovery feature is fantastic! I’ve attended so many great meetups through Sapio.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Daniel Wilson",
    userName: "@daniel_beta",
    comment:
      "Sapio's focus on communities is unlike anything else. It’s like LinkedIn, but so much more personal and fun!",
  },
];
export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Beta Testers Love{" "}
        </span>
        Sapio
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Hear from our beta testers about how Sapio is helping them connect,
        collaborate, and grow within their communities.
      </p>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
