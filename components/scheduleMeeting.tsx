import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function ScheduleMeeting() {
  return (
    <>
      <section className="bg-blue-50  mb-32 px-80">
        <div className="container mx-auto h-full w-full">
          <div className="flex flex-row items-center justify-between gap-8">
           
              <CalendarDays className="size-48 text-primary" />
              <div className="line-clamp-3">
                <h2 className="text-3xl font-bold mb-2">
                  Schedule a Meeting Today and Discover How

                  <span className="text-primary font-bold">
                  &nbsp;   Hardshiprelief
                  </span>
                </h2>
                <p className="text-3xl">
                  Can Transform Your Future
                </p>
              </div>
           
            <Button className="">
              Book a call Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
