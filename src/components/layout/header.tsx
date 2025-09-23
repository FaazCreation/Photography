'use client';

import * as React from 'react';
import { Camera, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '../ui/separator';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/members', label: 'Members' },
  { href: '/book-us', label: 'Book Us' },
  { href: '/contact', label: 'Contact' },
];

const NavLinks = ({ onClick, className }: { onClick?: () => void, className?: string }) => {
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
            pathname === href ? 'text-primary' : 'text-muted-foreground',
            className
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-auto md:mr-6">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg sm:text-xl">TCPC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="p-4 flex flex-col h-full">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-8"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <Camera className="h-7 w-7 text-primary" />
                  <span className="font-bold">Tejgaon College PC</span>
                </Link>
                <nav className="grid gap-5">
                  <NavLinks onClick={() => setIsSheetOpen(false)} className="text-base" />
                </nav>
                 <Separator className="my-6" />
                 <div className="grid gap-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/propose-event" onClick={() => setIsSheetOpen(false)}>
                        Propose an Event
                      </Link>
                    </Button>
                    <Button asChild className="w-full" size="lg">
                      <Link href="/join" onClick={() => setIsSheetOpen(false)}>
                        Join Us
                      </Link>
                    </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="/propose-event">Propose an Event</Link>
          </Button>
          <Button asChild>
            <Link href="/join">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
