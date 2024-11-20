import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "../renderer/Link";

export default function Steps() {
  return (
    <>
      <section className="py-48 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-row gap-8">
              <div className="w-[36rem]">
                <h2 className="text-[56px] leading-[68px]  font-bold text-blue-950 mb-6">
                  Easily apply for a personal loan online in 3 steps.
                </h2>
                <p className="text-gray-600 text-2xl font-[400] mb-12">
                  Fixed rates from 8.99% APR to 29.49% APR reflect the 0.25%
                  autopay interest rate discount and a 0.25% direct deposit
                  interest rate discount.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <Link href="/purpose">
                    <Button
                      size="lg"
                      className="!w-full h-24 md:w-auto bg-orange-500 hover:bg-orange-600 text-[32px] rounded-2xl font-bold py-6 px-12"
                    >
                      VIEW YOUR RATE
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <div className="space-y-6">
                <StepCard
                  number="01"
                  title="Prequalify"
                  description="Find the rate that you qualify for in 60 seconds with no commitment."
                  isActive={true}
                />
                <StepCard
                  number="02"
                  title="Choose your loan terms"
                  description="Choose from 2-7 year terms and finish your application online."
                  isActive={false}
                />
                <StepCard
                  number="03"
                  title="Receive your funds"
                  description="Sign your documents and funds will be wired to your account—as quickly as the same day."
                  isActive={false}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

function StepCard({
  number,
  title,
  description,
  isActive = false,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: Number(number) * 0.1 }}
    >
      <Card className="transition-all duration-300 border-none max-w-md">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div
              className={`flex-shrink-0 w-20 h-20 border-2 border-customCyan rounded-full flex items-center justify-center text-xl font-bold transition-colors ${
                isActive
                  ? "bg-white text-customCyan"
                  : "bg-white text-customCyan"
              }`}
            >
              {number}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-customCyan mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
