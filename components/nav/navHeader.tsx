import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NavHeader() {
  return (
    <nav className="bg-navy-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <span className="text-orange-500 font-bold text-2xl">Getting</span>
            <span className="font-bold text-2xl">cashnow</span>
          </div>
        </div>
        <Button variant="ghost" className="text-white hover:text-white/80">
          Disclosures
        </Button>
      </div>
    </nav>
  )
}