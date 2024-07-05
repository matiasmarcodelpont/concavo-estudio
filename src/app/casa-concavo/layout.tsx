import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casa Cóncavo',
  description: 'Una serie de casas co-creadas por Estudio Cóncavo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
