import { Button } from "@/components/ui/button";

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
              <h1 className="text-gray-100 font-extrabold text-3xl xs:text-5xl md:text-7xl">
                <span className="text-teal-500">Fast-Track Your Finances</span>
              </h1>
              <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-7xl leading-tight line-clamp-2">
                Personal loans made
                <br />
                simple Online!
              </h2>
            </div>
            <div className="inline-flex  gap-4 py-8">

              <Button   >
                View Your Rates
                
                </Button>
              <Button variant={'outline'} size={"lg"} >Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
