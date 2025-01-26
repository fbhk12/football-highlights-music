import { Alfa_Slab_One } from 'next/font/google';

const retroFont = Arial Narrow ({
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
      <body className={retroFont.className}>{children}</body>
    </html>
  );
}
