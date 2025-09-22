import { Camera, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NavLinks = () => (
  <>
    <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">About</a>
    <a href="#gallery" className="text-lg font-medium hover:text-primary transition-colors">Gallery</a>
    <a href="#ai-tool" className="text-lg font-medium hover:text-primary transition-colors">AI Tool</a>
    <a href="#join" className="text-lg font-medium hover:text-primary transition-colors">Join Us</a>
  </>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Camera className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block">Tejgaon College Photography Club</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <a href="#" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                  <span>TCPC</span>
                </a>
                <div className="flex flex-col gap-4">
                  <NavLinks />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
