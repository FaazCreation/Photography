import { Camera } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Camera className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Tejgaon College Photography Club. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:ml-auto">
          <Link href="/about" className="text-sm hover:underline">About</Link>
          <Link href="/gallery" className="text-sm hover:underline">Gallery</Link>
          <Link href="/join" className="text-sm hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
