import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./header";
import { Link } from "../../renderer/Link";




export function NavHeader() {
  const goBack = () => {
      window.history.back()
  }
  return (
    <nav className="bg-[#061B49] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-4 ">
        <div className="flex items-center space-x-4 ">
          <Button
          onClick={goBack}
            variant="link"
            size="icon"
            className="text-white hover:-translate-x-4 transition-all duration-500 hover:scale-105 "
          >
            
              <ChevronLeft className="!size-10" />
            
          </Button>
        </div>
        <div className="col-span-2 flex items-center  ">
          <Logo />
        </div>
        <Button variant="link" className="text-white hover:text-white/80">
          <Link href="">Disclosures</Link>
        </Button>
      </div>
    </nav>
  );
}
