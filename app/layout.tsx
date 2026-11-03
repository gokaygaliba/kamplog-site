import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'KAMPLOG — Doğaya Açılan Yol',
 description: 'Kamp rotaları, doğa kaçamakları, ekipman rehberleri ve keşif hikâyeleri.',
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="tr"><body>{children}</body></html>;
}
