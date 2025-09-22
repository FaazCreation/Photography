'use client';

import * as React from 'react';
import { Camera, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/members', label: 'Members' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/propose-event', label: 'Propose Event' },
  { href: '/contact', label: 'Contact' },
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={cn(
            'text-sm font-medium hover:text-primary transition-colors',
            pathname === href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Camera className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block">TCPC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLinks />
        </nav>
        <div className="flex-1 flex justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className='p-6'>
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-6" onClick={() => setIsSheetOpen(false)}>
                        <Camera className="h-6 w-6 text-primary" />
                        <span className="font-bold">Tejgaon College Photography Club</span>
                    </Link>
                    <nav className="grid gap-4">
                        <NavLinks onClick={() => setIsSheetOpen(false)} />
                         <Button asChild className="w-full mt-4">
                            <Link href="/join" onClick={() => setIsSheetOpen(false)}>Join Us</Link>
                        </Button>
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
             <Button asChild>
                <Link href="/join">Join Us</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
