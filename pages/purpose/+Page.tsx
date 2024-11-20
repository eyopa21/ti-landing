export { Page };
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  CreditCard,
  DollarSign,
  Home,
  Building,
  ChevronDown,
} from "lucide-react";

function Page() {
  return (
    <>
      <div className="min-h-screen  bg-white">
        <main className=" max-w-2xl container mx-auto px-4 py-8">
          <div className=" mx-auto  h-screen">
            <div className="text-center mb-12">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=96" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold text-navy-900 mb-2">
                Shelly Thompson
              </h1>
              <p className="text-gray-600">Loan Advisor</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibopnpmld text-center text-navy-900">
                Access a full cash advance—repay in simple, manageable
                installments!
              </h2>
              <p className="text-gray-600 text-center mb-8">
                What do you plan on using the personal loan for?
              </p>

              <div className="space-y-4">
                <LoanOption
                  icon={<DollarSign className="!size-10 " />}
                  label="Debt Consolidation"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                />
                <LoanOption
                  icon={<CreditCard className="!size-10 " />}
                  label="Credit Card Consolidation"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                />
                <LoanOption
                  icon={<DollarSign className="!size-10 " />}
                  label="Major Purchase"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                />
                <LoanOption
                  icon={<Home className="!size-10 " />}
                  label="Home Improvement"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                />
                <LoanOption
                  icon={<Building className="!size-10 " />}
                  label="Business"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                />

               <Menubar className="border-none !w-full bg-blue-500 p-0">
               <MenubarMenu >
                  <MenubarTrigger className="w-full bg-gray-200">
                    
                    <Button
                      variant="outline"
                      className="!w-full justify-between text-lg py-6"
                    >
                      More Options
                      <ChevronDown className="h-5 w-5" />
                    </Button>
                  </MenubarTrigger>
                  <MenubarContent className="w-full">
                    <div className="bg-red-500 w-8s">
helloooooooooooooooooooooooooooooooo
                    </div>
                    
                  </MenubarContent>
                </MenubarMenu>
               </Menubar>
               <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="More Options" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
              </div>

              <div className="text-center text-sm text-gray-500 mt-8">
                <p className="flex items-center justify-center gap-2">
                  Privacy Secured | Advertising Disclosures
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function LoanOption({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <Button
      className={`w-full justify-start font-[600] py-10 text-2xl ${className}`}
    >
      <span className="mr-4">{icon}</span>
      {label}
    </Button>
  );
}
