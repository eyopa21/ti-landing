
import { Card, CardContent } from "@/components/ui/card";
import { Star, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Michaels",
      title: "Best Services ever!",
      quote:
        "Hardshiprelief helped me cut my bills and save thousands! Their expert guidance made the process simple and stress-free. Highly recommend!",
      // avatarSrc: "../../public/avatar/1.png",
      days: 2,
      delay: 0.1,
      rating: 4,
    },
    {
      name: "Bobby Philips",
      title: "Highly Recommended!",
      quote:
        "Thanks to Hardshiprelief, I discovered programs that fit my needs perfectly. I’m now saving more than I ever thought possible!",
      // avatarSrc: "../../public/avatar/2.png",
      days: 2,
      delay: 0.2,
      rating: 5,
    },
    {
      name: "Joanne Baker",
      title: "Great BPO services !",
      quote:
        "Hardshiprelief’s team was incredibly helpful in guiding me through my options. I’m now on track to financial freedom with their tailored solutions!",
      // avatarSrc: "../../public/avatar/3.png",
      days: 4,
      delay: 0.3,
      rating: 5,
    },
    {
      name: "Bobby Philips",
      title: "Highly Recommended!",
      quote:
        "Thanks to Hardshiprelief, I discovered programs that fit my needs perfectly. I’m now saving more than I ever thought possible!",
      // avatarSrc: "../../public/avatar/2.png",
      days: 2,
      delay: 0.2,
      rating: 5,
    },
  ];
  return (
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center ">
        <div className="  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Over $26 Billion in High-Interest Debt
            </h2>
            <p className="text-3xl text-orange-500 font-semibold">
              Eliminated by Our Members.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="mt-24 flex justify-center gap-8 px-32">
          <Button className="mx-20 lg:mx-0 w-full h-20 text-3xl font-bold gap-6">
          <Mail className="!size-8 stroke-[4]"/> <span>Contact@Domain </span>
          </Button>
          <Button className="mx-20 lg:mx-0 w-full bg-orange-500 hover:bg-orange-600 h-20 text-3xl font-bold">
          <Phone className="!size-8 stroke-[4]" />  Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ReviewCardProps {
  name: string;
  days: number;
  rating: number;
  delay: number;
  quote: string;
}

function ReviewCard({ name, days, rating, delay, quote }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none py-8">
        <CardContent className="p-6">
          <div className="flex  justify-between ">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`bg-[#219653] p-0.5 ${
                    index < rating ? "block" : "hidden"
                  }`}
                >
                  <Star className={`w-5 h-5 text-white fill-gray-100`} />
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">{days} days ago</span>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">{quote}</p>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-blue-950">{name}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
