import { Button } from "@/components/ui/button";
import { CalendarDays, DollarSign, Percent, MoveRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <>
      <div id="up" className=" bg-fixed  bg-center bg-cover h-screen relative">
        <div
          className=" bg-opacity-50 bg-cover w-full flex items-center justify-center bg-[url('../../public/mainBg.svg')] "
          style={{ height: `calc(100vh - 103px)` }}
        >
          <div className="mx-2 lex justify-center text-center -mt-32">
            <div className=" space-y-8 px-16">
              <h1 className="text-gray-100  text-[28px] leading-snug lg:text-[5.5rem] font-bold">
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
        <section className="flex lg:px-32 w-screen lg:py-4 absolute bottom-0 ">
          <div className="p-4">
            <div className=" grid grid-cols-1 lg:grid-cols-3  w-full rounded-xl shadow-sm shadow-gray-400   !h-40 ">
              <Card className="!rounded-l-xl rounded-none border-none shadow-none ">
                <CardContent className="p-4 flex gap-4">
                  <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <Percent className="h-8 w-8 text-black " />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Low fixed rates</h3>
                    <p className="text-gray-600">
                      Start with a low fixed-rate personal loan and you could
                      save big.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-none border-x-0  border-y-0 w-full  shadow-none">
                <CardContent className="flex gap-4 p-4 lg:border-x-2 ">
                  <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-8 w-8 text-black " />
                  </div>
                  <div >
                    <h3 className="text-xl font-bold mb-2">
                      Fast Funds, No Fuss
                    </h3>
                    <p className="text-gray-600">
                      Funds When You Need Them Your Quick Cash Solution!
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-none border-none  shadow-none !rounded-r-xl">
                <CardContent className="p-4 flex gap-4">
                  <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="h-8 w-8 text-black " />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Apply online</h3>
                    <p className="text-gray-600">
                      Our online application process is quick and easy. Have
                      your rate in just 60 seconds to get started.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
