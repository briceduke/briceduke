import type { Metadata } from 'next'
import { Lusitana } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

export const lusitana = Lusitana({
  weight: '400',
  variable: "--font-lusitana",
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: 'Brice Duke',
  description: 'Brice Duke\'s personal website and portfolio.',
  metadataBase: new URL('https://briceduke.dev'),
  icons: 'https://briceduke.dev/BD.svg',
  openGraph: {
    title: 'Brice Duke',
    description: 'Brice Duke\'s personal website and portfolio.',
    images: [
      'https://briceduke.dev/BD.svg',
    ],
  },
  twitter: {
    title: 'Brice Duke',
    images: [
      'https://briceduke.dev/BD.svg',
    ],
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-muted font-serif antialiased transition-colors duration-300",
        lusitana.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
