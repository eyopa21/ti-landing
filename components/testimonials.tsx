
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator"

const Component = ({ name, title, quote, avatarSrc }) => (
  <>
    <div className="flex">
      <blockquote className="  p-6 px-12 shadow-sm ">
        <div className="flex flex-col items-start gap-4">
          <Avatar className="w-20 h-20">
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
            <p className="mt-0.5 text-lg font-bold text-primary">{title}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 ">
       {quote}
        </p>

        <p className="pt-4 font-extrabold">{name}</p>
      </blockquote>
      <div className="py-8">
        <Separator orientation="vertical"   />
      </div>
    </div>
  </>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Michaels",
      title: "Best Services ever!",
      quote: "Hardshiprelief helped me cut my bills and save thousands! Their expert guidance made the process simple and stress-free. Highly recommend!",
      avatarSrc: "../../public/avatar/1.png",
    },
    {
      name: "Bobby Philips",
      title: "Highly Recommended!",
      quote: "Thanks to Hardshiprelief, I discovered programs that fit my needs perfectly. I’m now saving more than I ever thought possible!",
        avatarSrc: "../../public/avatar/2.png",
    },
    {
      name: "Joanne Baker",
      title: "Great BPO services !",
      quote: "Hardshiprelief’s team was incredibly helpful in guiding me through my options. I’m now on track to financial freedom with their tailored solutions!",
        avatarSrc: "../../public/avatar/3.png",
    },
  ];

  return (
    <section className="pb-32">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 ">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          What Our Clients Say
        </h2>
        <div className="p-8">
          <div>
            <p className="text-center leading-8 italic font-extralight  line-clamp-4 overflow-hidden text-ellipsis">
              Hardshiprelief  is committed to delivering the best possible
              experience to all clients. To that end, Hardshiprelief Start has
              created a client satisfaction email portal info@QuickStartllc.com
              Any complaint submitted to Hardshiprelief portal will receive a
              response within one (1) business day, and a remedy to the
              complaint within three (3) business days. 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 bg-white">
          {testimonials.map((testimonial, index) => (
            <Component key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
