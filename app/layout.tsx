import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Janeesha Udeshani | Civil Engineer & Structural Draftsman',
  description: 'The portfolio of Janeesha Udeshani — civil engineering, structural drafting, rebar detailing and thoughtful design.',
  openGraph: { title: 'Janeesha Udeshani — Civil Engineer & Structural Draftsman', description: 'Designing structures. Shaping spaces.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><AnimatedBackground /><CustomCursor />{children}</body></html>;
}
