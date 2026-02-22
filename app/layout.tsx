import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { CartProvider } from '@/contexts/cart-context'
import CartSidebar from '@/components/cart-sidebar'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RGVPeptides — Ascending the Valley',
  description: 'Premium peptide research products for laboratory use. Third-party tested, USA synthesized, cold-chain shipped. Strictly for research purposes only.',
  keywords: ['peptides', 'research', 'laboratory', 'biotech', 'RGVPeptides'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
