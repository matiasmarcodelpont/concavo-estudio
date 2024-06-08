import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { QRCode } from 'react-qrcode-logo'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const useHandleQr = () => {
  const [clickCount, setClickCount] = useState(0)
  const qrRef = useRef<QRCode>(null)

  const pathname = usePathname()

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

  return { currentUrl: `${BASE_URL}${pathname}`, handleClick, qrRef }
}
