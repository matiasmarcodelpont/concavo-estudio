import { QRCode } from 'react-qrcode-logo'
import config from '../../../tailwind.config'
import { forwardRef } from 'react'

interface QrProps {
  value: string
  size?: number
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Qr = forwardRef(({ value, size = 80, onClick }: QrProps, ref) => {
  return (
    <div onClick={onClick}>
      <QRCode
        ref={ref as React.MutableRefObject<QRCode>}
        size={size}
        value={value}
        bgColor={config.theme.colors.bone}
        fgColor={config.theme.colors.black}
        quietZone={4}
        qrStyle='dots'
        // ⬇️⬇️⬇️
        logoImage='/logos/concavo_black.png' // TODO: Poner el otro logo de Cóncavo y handler el size
        // ⬆️⬆️⬆️
        logoWidth={(size * 25) / 80}
        logoHeight={(size * 25) / 3.5 / 80}
        removeQrCodeBehindLogo
        logoPadding={(size * 1.5) / 80}
      />
    </div>
  )
})

Qr.displayName = 'Qr'
