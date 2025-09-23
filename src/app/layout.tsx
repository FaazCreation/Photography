
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { Metadata, Viewport } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const siteConfig = {
  name: 'Tejgaon College Photography Club (TCPC)',
  description: 'The official website for the Tejgaon College Photography Club (TCPC), a vibrant community for student photographers at Tejgaon College in Dhaka. We offer workshops, photo walks, and exhibitions to foster creativity and technical skill. Join TCPC to enhance your photography journey.',
  url: 'https://tcpc.vercel.app',
  ogImage: 'https://tcpc.vercel.app/og-image.png',
  links: {
    twitter: 'https://twitter.com/your-profile',
  },
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Tejgaon College Photography Club", "TCPC", "Tejgaon College", "Photography Club Dhaka", "Student Photography Bangladesh", "College Club Dhaka", "Photography Workshops Dhaka"],
  authors: [{ name: "Tejgaon College Photography Club" }],
  creator: "Firebase Studio",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@TejgaonCollegePC',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden',
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
