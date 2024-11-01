import { Button } from "@/components/ui/button";
import { CalendarDays, DollarSign, Percent, MoveRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <>
      <div
        id="up"
        className=" bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
      >
        <div
          className=" bg-opacity-50  flex items-center justify-center bg-[url('../../public/mainBg.svg')] "
          style={{ height: `calc(100vh - 103px)` }}
        >
          <div className="mx-2 text-center  -mt-32">
            <div className="space-y-8">
              <h1 className="text-gray-100 font-extrabold text-2xl  md:text-[5.5rem]">
                <span className="text-teal-500">Fast-Track Your Finances</span>
              </h1>
              <h2 className="text-gray-200 font-extrabold text-2xl  md:text-7xl leading-tight line-clamp-2">
                Personal loans made
                <br />
                simple Online!
              </h2>
            </div>
            <div className="inline-flex  gap-4 mt-20 py-8">
              <Button size={"default"}>
                View Your Rates
                <MoveRight />
              </Button>
              <Button
                variant={"outline"}
                size={"default"}
                className="bg-transparent hidden lg:block border-white text-white border-2"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <section className="container mx-auto lg:px-32 lg:py-12 absolute bottom-0 bg-white">
          <div className=" grid grid-cols-1 lg:grid-cols-3  rounded-lg p-4">
            <Card className="rounded-none border-none shadow-none">
              <CardContent className="p-4 flex gap-4">
                <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <Percent className="h-8 w-8 text-primary " />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Low fixed rates</h3>
                  <p className="text-gray-600">
                    Start with a low fixed-rate personal loan and you could save
                    big.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className=" rounded-none border-x-0 lg:border-x-2 border-y-0   shadow-none">
              <CardContent className="flex gap-4 p-4 ">
                <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-primary " />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Fast Funds, No Fuss
                  </h3>
                  <p className="text-gray-600">
                    Funds When You Need Them Your Quick Cash Solution!
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none  shadow-none">
              <CardContent className="p-4 flex gap-4">
                <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="h-8 w-8 text-primary " />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Apply online</h3>
                  <p className="text-gray-600">
                    Our online application process is quick and easy. Have your
                    rate in just 60 seconds to get started.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
