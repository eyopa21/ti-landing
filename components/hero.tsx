import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Percent, DollarSign, Globe, MessageCircleMore } from "lucide-react";
import { Link } from "../renderer/Link";

export default function Hero() {
  return (
    <>
      <div className="bg-[#0B2653] h-screen py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl text-gray-300 uppercase tracking-widest "
              >
                <span className="!font-thin">PERSONAL LOAN</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-5xl md:text-[56px] font-bold text-white "
              >
                <span className="text-customCyan w-full">
                  Fast-Track Your Finances
                </span>
                <br />
                <span className="mt-2 block md:text-[56px">
                  Personal loans made simple Online!
                </span>
              </motion.h1>

              <div className="mt-12 flex space-x-8">
                <Link href="/purpose">
                <Button
                
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 h-16 text-xl font-bold"
                >
                  GET QUALIFIED
                </Button>
                  </Link>
                <Button size="lg" className="h-16 !px-32 text-2xl font-bold">
                  <MessageCircleMore className="!size-8" />
                  CHAT NOW
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Feature
                  icon={<Percent className="h-8 w-8" />}
                  title="Low fixed rates"
                  description="Consolidate high-interest debt with a low fixed-rate personal loan and you could save big."
                />
                <Feature
                  icon={<DollarSign className="h-8 w-8" />}
                  title="No fees required"
                  description="No origination fees required, no prepayment penalty fees, and no late fees whatsoever."
                />
                <Feature
                  icon={<Globe className="h-8 w-8" />}
                  title="Apply online"
                  description="Our online application process is quick and easy. View your rate in just 60 seconds to get started."
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <img
                src="/hero.svg"
                alt="Money bag illustration"
                className="w-full max-w-[600px] mx-auto scale-125 pt-8"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="w-20 h-20 mx-auto border-2 border-customCyan rounded-full flex items-center justify-center mb-4">
        <div className="text-teal-400">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold text-teal-400 mb-2">{title}</h3>
      <p className="text-gray-100 text-lg font-light leading-8 mt-4">{description}</p>
    </motion.div>
  );
}
