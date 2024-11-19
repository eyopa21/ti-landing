"use client";


import { Link } from "../../renderer/Link";

export default function BottomNav(){
  
  return (
    <footer className="bg-[#061B49] py-8 ">
      <div className="container mx-auto px-4 flex items-center justify-between self-end">
        <div>
          <Logo />
        </div>
        <div className="flex items-center space-x-20">
            <a
              href="#"
              className="text-white hover:text-orange-500 text-xl transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 text-xl transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 text-xl transition"
            >
              Privacy Policy
            </a>
          </div>
          <div>

          </div>
           
      </div>

    </footer>
  );
}

function Logo() {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href="/" className="flex  lg:hidden items-center">
        <span className="ml-2 text-3xl font-bold text-teal-500">H</span>
        <span className=" text-3xl font-bold text-white">R</span>
      </Link>

      <Link href="/" className="lg:flex  hidden  items-center">
        <span className="ml-2 text-3xl font-bold text-orange-500">Getting</span>
        <span className=" text-3xl font-bold text-white">Cashnow</span>
      </Link>
    </div>
  );
}
