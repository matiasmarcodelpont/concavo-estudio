import { cn } from '@/lib/utils'
import React from 'react'

function IsologoConcavo({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 569 569'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('text-black', className)}
    >
      <mask
        id='mask0_2090_30'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={569}
        height={569}
      >
        <rect width={569} height={569} fill='currentColor' />
      </mask>
      <g mask='url(#mask0_2090_30)'>
        <mask
          id='mask1_2090_30'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x={1}
          y={107}
          width={569}
          height={356}
        >
          <path d='M569.616 107H1V462.552H569.616V107Z' fill='white' />
        </mask>
        <g mask='url(#mask1_2090_30)'>
          <mask
            id='mask2_2090_30'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x={144}
            y={109}
            width={282}
            height={118}
          >
            <path d='M144.454 109.179H425.761V226.542H144.454V109.179Z' fill='white' />
          </mask>
          <g mask='url(#mask2_2090_30)'>
            <mask
              id='mask3_2090_30'
              style={{ maskType: 'luminance' }}
              maskUnits='userSpaceOnUse'
              x={144}
              y={109}
              width={282}
              height={118}
            >
              <path
                d='M425.688 109.179C425.688 173.863 362.762 226.303 285.146 226.303C207.525 226.303 144.6 173.863 144.6 109.179'
                fill='white'
              />
            </mask>
            <g mask='url(#mask3_2090_30)'>
              <path d='M568.066 462.375H2.14941V107.343H568.066V462.375Z' fill='currentColor' />
            </g>
          </g>
          <mask
            id='mask4_2090_30'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x={3}
            y={226}
            width={564}
            height={235}
          >
            <path d='M3.98535 226.178H566.235V460.538H3.98535V226.178Z' fill='white' />
          </mask>
          <g mask='url(#mask4_2090_30)'>
            <mask
              id='mask5_2090_30'
              style={{ maskType: 'luminance' }}
              maskUnits='userSpaceOnUse'
              x={4}
              y={226}
              width={563}
              height={235}
            >
              <path
                d='M566.23 226.302C566.23 355.665 440.383 460.538 285.147 460.538C129.905 460.538 4.05859 355.665 4.05859 226.302'
                fill='white'
              />
            </mask>
            <g mask='url(#mask5_2090_30)'>
              <path d='M568.066 462.374H2.14941V107.343H568.066V462.374Z' fill='currentColor' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default IsologoConcavo
