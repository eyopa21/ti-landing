import { Button } from "@/components/ui/button";
import {  ArrowRight, CalendarSearch } from "lucide-react";

export default function ScheduleMeeting() {
  return (
    <>
      <section className="bg-gradient-to-b from-fuchsia-100 to-zinc-50 p-4 mb-32 lg:px-64 py-16 lg:py-20">
        <div className="container mx-auto h-full w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 space-y-8 lg:space-y-0 lg:gap-8 items-center">
           
              <CalendarSearch className="size-20 lg:size-32 text-primary justify-self-center lg:justify-self-end" />
              <div className="hidden lg:block line-clamp-3 col-span-3  w-full ">
                <h2  className="text-3xl text-center lg:text-4xl font-bold mb-2">
                  Schedule a Meeting Today and Discover How

                  <span className="text-primary font-bold">
                  &nbsp;   Hardshiprelief
                  </span>
                </h2>
                <p className="text-4xl font-bold">
                  Can Transform Your Future
                </p>
              </div>
              <div className="text-2xl font-bold text-center px-2">
              Schedule a Meeting Today and Discover How Hardshiprelief Can Transform Your Future
              </div>
           
            <Button className="mx-20 lg:mx-0">
              Book a call Now <ArrowRight />
            </Button>
          </div>


    
        </div>
      </section>
    </>
  );
}
