import { kv } from "@vercel/kv";
import { Feature } from "../pages/types/types";
import FeatureForm from "../components/form";
import { saveEmail } from "../utils/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export let metadata = {
  title: "Sapio - app landing page",
  description: "Landing page for the sapio app ",
};



async function getFeatures() {
  try {
    let itemIds = await kv.zrange("items_by_score", 0, 100, {
      rev: true,
    });

    if (!itemIds.length) {
      return [];
    }

    let multi = kv.multi();
    itemIds.forEach((id) => {
      multi.hgetall(`item:${id}`);
    });

    let items: Feature[] = await multi.exec();
    return items.map((item) => {
      return {
        ...item,
        score: item.score,
        created_at: item.created_at,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page() {
  let features = await getFeatures();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
      {/* <div className="flex justify-center items-center bg-black text-white rounded-[30%] w-16 sm:w-24 h-16 sm:h-24 my-8 shadow-md">
  <p className="text-lg sm:text-2xl font-bold tracking-widest">SAPIO</p>
</div> */}
        <h1 className="text-lg sm:text-2xl font-bold mb-2">
          Help us prioritize our roadmap 🎉
        </h1>
        <h2 className="text-md sm:text-xl mx-4">
          Create or vote up features you want to see in our product.
        </h2>
        <div className="flex flex-wrap items-center justify-around max-w-4xl my-8 sm:w-full rounded-xl shadow-xl h-full border border-gray">
          <FeatureForm features={features} />
          <hr className="border-1 border-gray-200 my-8 mx-8 w-full" />
          <div className="mx-10 w-full  ">
            <p className="flex text-gray-500">
              Leave your email address here to be notified when feature requests
              are released.
            </p>
            <form className="relative my-4" action={saveEmail}>
         

<div className="w-full flex justify-center">
    <div className="flex max-w-sm items-center gap-2 space-x-2 justify-center">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
    </div>
  

            </form>
           
          </div>
        </div>
      </main>
    </div>
  );
}
