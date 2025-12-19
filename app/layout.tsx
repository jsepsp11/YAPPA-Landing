import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'YAPPA | Digitaliza tu negocio. Haz crecer tu negocio.',
  description: 'YAPPA es la app para llevar tu negocio en el celular: inventario, ventas y gastos en un solo lugar. Primer mes gratis. Hecho en Ecuador.',
  keywords: ['yappa', 'negocio', 'inventario', 'ventas', 'ecuador', 'app negocios', 'punto de venta', 'comercios ecuador'],
  openGraph: {
    title: 'YAPPA | Digitaliza tu negocio. Haz crecer tu negocio.',
    description: 'La app para llevar tu negocio en el celular. Primer mes gratis.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
