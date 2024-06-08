import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { QRCode } from 'react-qrcode-logo'

export const useHandleQr = () => {
  const [clickCount, setClickCount] = useState(0)
  const qrRef = useRef<QRCode>(null)

  const pathname = usePathname()
  const currentUrl = useMemo(
    () => (process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}` : ''),
    [pathname],
  )

  const handleClick = () => {
    setClickCount((prev) => prev + 1)
  }

  const handleTripleClick = useCallback(() => {
    qrRef.current?.download('png', pathname === '/' ? 'home' : pathname.slice(1))
  }, [pathname])

  useEffect(() => {
    if (clickCount === 3) {
      handleTripleClick()
      setClickCount(0)
    }

    const timeout = setTimeout(() => {
      setClickCount(0)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [clickCount, handleTripleClick])

  return { currentUrl, handleClick, qrRef }
}
