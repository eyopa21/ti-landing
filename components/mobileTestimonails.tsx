import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Component = ({ name, title, quote, avatarSrc }) => (
  <>
    <div className="flex bg-white text-black rounded-lg">
      <blockquote className="  p-6 px-8 shadow-sm ">
        <div className="flex flex-row items-center bg-rose-100 gap-2 p-2 rounded-lg">
          <Avatar className="w-16 h-16">
            <AvatarImage src={avatarSrc} alt={name || "Avatar"} />
            <AvatarFallback>
              {name
                ? name
                    ?.split(" ")
                    .map((n: string) => n[0])
                    .join("")
                    .toUpperCase()
                : "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-extrabold text-black">{name}</p>
            <p className="text-xs font-bold text-primary">{title}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 ">{quote}</p>
        <div className="mt-8 flex justify-between items-center">
          <h5 className="font-bold text-lg">Trustpilot</h5>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="bg-[#219653] p-0.5">

                    <Star  className="size-3 text-white fill-gray-100" />
                </span>
            ))}
          </div>
        </div>
      </blockquote>
    </div>
  </>
);

export default function MobileTestimonials() {
  const testimonials = [
    {
      name: "Sarah Michaels",
      title: "Best Services ever!",
      quote:
        "Hardshiprelief helped me cut my bills and save thousands! Their expert guidance made the process simple and stress-free. Highly recommend!",
      avatarSrc: "../../public/avatar/1.png",
    },
    {
      name: "Bobby Philips",
      title: "Highly Recommended!",
      quote:
        "Thanks to Hardshiprelief, I discovered programs that fit my needs perfectly. I’m now saving more than I ever thought possible!",
      avatarSrc: "../../public/avatar/2.png",
    },
    {
      name: "Joanne Baker",
      title: "Great BPO services !",
      quote:
        "Hardshiprelief’s team was incredibly helpful in guiding me through my options. I’m now on track to financial freedom with their tailored solutions!",
      avatarSrc: "../../public/avatar/3.png",
    },
  ];

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

        <div className="flex justify-center mx-12 mt-4">
          <Carousel className="w-full max-w-xs  ">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Component {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" text-black bg-white" />
            <CarouselNext className=" text-black bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
