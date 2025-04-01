import { Oswald, Bungee_Shade } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700']
});

const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
