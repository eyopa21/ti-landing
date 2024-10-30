import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"



export default function Contact() {
  return (
    <>
      <section className="bg-blue-950 py-20">
        <div className="  px-4">
          <div className="flex justify-center ">
              <h2 className="text-5xl  w-2/3 font-bold text-white text-center mb-12">
                Get a free consultant from one of our experts right now!
              </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 bg-white p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="First & Last Name" className="bg-white" />
                  <Input type="email" placeholder="Email" className="bg-white" />
                  <Input placeholder="Phone Number" className="bg-white" />
                  <Input placeholder="Subject" className="bg-white" />
                </div>
                <Textarea placeholder="Message" className="bg-white" />
                <div className="flex justify-center items-center gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-primary text-sm">
                    I accept the privacy and terms
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full "
                >
                  SUBMIT
                </Button>
              </form>
          </div>
        </div>
      </section>
    </>
  );
}
