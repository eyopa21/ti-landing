import { Button } from "@/components/ui/button";
import {  ArrowRight, CalendarSearch } from "lucide-react";

export default function ScheduleMeeting() {
  return (
    <>
      <section className="bg-blue-50  mb-32 px-64 py-20">
        <div className="container mx-auto h-full w-full">
          <div className="grid grid-cols-5 gap-8 items-center">
           
              <CalendarSearch className="size-32 text-primary justify-self-end" />
              <div className="line-clamp-3 col-span-3 ">
                <h2 className="text-4xl font-bold mb-2">
                  Schedule a Meeting Today and Discover How

                  <span className="text-primary font-bold">
                  &nbsp;   Hardshiprelief
                  </span>
                </h2>
                <p className="text-4xl font-bold">
                  Can Transform Your Future
                </p>
              </div>
           
            <Button className="">
              Book a call Now <ArrowRight />
            </Button>
          </div>


    
        </div>
      </section>
    </>
  );
}
