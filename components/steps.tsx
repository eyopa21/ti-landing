
import { Button } from "@/components/ui/button";


export default function Steps() {
  return (
    <>
     <section className="container lg:px-[22rem] bg-[#F6F7F9] lg:bg-white  mx-auto p-6  py-8 text-black">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Easily apply for    
              <br />a personal loan online in 3 steps.
            </h2>
            <p className="text-gray-400 mb-6">
              Fixed rates from 8.99% APR to 29.49% APR reflect the 0.25% autopay interest rate discount and a 0.25% direct deposit interest rate discount.
            </p>
            <Button className="h-14 rounded-none w-full text-white bg-black hover:bg-gray-800 lg:bg-primary">
              VIEW YOUR RATE
            </Button>
          </div>
          <div className="space-y-8 ">
            <div className="flex gap-4">
              <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-black font-bold mb-2">Prequalify</h3>
                <p className="text-gray-400">Find the rate that you qualify for in 60 seconds with no commitment.</p>
              </div>
            </div>
            <div className="flex gap-4">
            <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-black font-bold mb-2">Choose your loan terms</h3>
                <p className="text-gray-400">Choose from 2-7 year terms and finish your application online.</p>
              </div>
            </div>
            <div className="flex gap-4">
            <div className="bg-white text-black border-black border-2 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-black font-bold mb-2">Receive your funds</h3>
                <p className="text-gray-400">Sign your documents and funds will be wired to your account—as quickly as the same day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}



