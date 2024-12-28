import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex  relative w-[700px] h-[600px] hover:z-30 ">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl hover:z-30 shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Beta Tester</CardTitle>
            <CardDescription>@earlyuser</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          "Sapio is a game-changer! Connecting with like-minded individuals has
          never been easier."
        </CardContent>
      </Card>

      {/* Join Beta */}
      <Card className="absolute right-[20px] top-1  hover:z-30 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 z-20">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=10"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Join Beta</CardTitle>
          <CardDescription className="font-normal text-primary">
            Be one of the first users to test out Sapio!
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Experience the cutting-edge features of Sapio before anyone else.
            Your feedback is invaluable to us!
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-full">Sign Up for Beta</Button>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[190px] left-[0px] w-72 hover:z-30 drop-shadow-xl shadow-black/10 dark:shadow-white/10"> 
         <CardHeader> 
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Early Access
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /forever</span>
          </div>

          <CardDescription>
            Get free lifetime access during our beta testing phase.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Connect with Communities", "Private Chats", "Interest-Based Features"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] hover:z-30 bottom-[120px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Still in Development</CardTitle>
            <CardDescription className="text-md mt-2">
              Sapio is continuously evolving with new features to connect,
              collaborate, and build communities.
            </CardDescription>
          </div>
        </CardHeader>
      </Card> 
     
    </div>
  );
};