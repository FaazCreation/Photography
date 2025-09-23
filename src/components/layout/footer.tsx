import { Camera } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Link href="/" className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Tejgaon College Photography Club</span>
            </Link>
            <p className="text-sm leading-loose text-muted-foreground">
              © {new Date().getFullYear()} TCPC. All rights reserved.
            </p>
          </div>
          <Separator className="w-full max-w-sm md:hidden" />
          <nav className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <Link href="/gallery" className="text-sm hover:underline">Gallery</Link>
            <Link href="/events" className="text-sm hover:underline">Events</Link>
            <Link href="/members" className="text-sm hover:underline">Members</Link>
            <Link href="/book-us" className="text-sm hover:underline">Book Us</Link>
            <Link href="/contact" className="text-sm hover:underline">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
