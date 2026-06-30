import type { Metadata } from 'next';
import './globals.css';
import { AdminSidebar } from '@/components/Sidebar';
import { ThemeProvider, Toaster } from '@street-culture/ui';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import AdminHeader from '@/components/Header';
import { SanityLive } from '@/sanity/lib/live';
import { draftMode } from 'next/headers';

export const metadata: Metadata = {
  title: {
    default: 'Street Culture',
    template: '%s | Street Culture',
  },
  description: 'Street Culture Admin Dashboard',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html
      lang="en"
      className={twMerge(clsx('h-full', 'antialiased'))}
      suppressHydrationWarning
    >
      <body className="min-h-full grid grid-cols-[200px_1fr] relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AdminSidebar />
          <div className="flex flex-col gap-y-6">
            <AdminHeader />
            {children}
          </div>
          <Toaster richColors position="top-center" />
        </ThemeProvider>

        <SanityLive includeDrafts={isDraftMode} />
      </body>
    </html>
  );
}
