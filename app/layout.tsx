import { Oswald, Righteous } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
});

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${righteous.variable}`}>{children}</body>
    </html>
  );
}
