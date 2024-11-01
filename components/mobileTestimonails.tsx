import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function MobileTestimonials() {
  return (
    <section className="pb-32 bg-black text-white py-8 p-4">
      <div className="mx-auto max-w-screen-xl   sm:px-6 lg:px-8 ">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Over $26 Billion in High-Interest Debt
        </h2>
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-5xl">
          Eliminated by Our Members.
        </h2>
        <div className="p-4">
          <div>
            <p className="text-center leading-8 italic font-extralight   overflow-hidden text-ellipsis">
              Hardshiprelief is committed to delivering the best possible
              experience to all clients. To that end, Hardshiprelief Start has
              created a client satisfaction email portal info@QuickStartllc.com
              Any complaint submitted to Hardshiprelief portal will receive a
              response within one (1) business day, and a remedy to the
              complaint within three (3) business days. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
