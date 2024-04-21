export default function CasaConcavoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
