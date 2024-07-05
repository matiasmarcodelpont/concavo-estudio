import { cn } from '@/lib/utils'
import React from 'react'

function IsologoCasa({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 588 588'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('text-black', className)}
    >
      <mask
        id='mask0_2090_75'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={588}
        height={588}
      >
        <rect width={588} height={588} fill='currentColor' />
      </mask>
      <g mask='url(#mask0_2090_75)'>
        <mask
          id='mask1_2090_75'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x={146}
          y={352}
          width={296}
          height={125}
        >
          <path d='M146.83 352.972H441.126V476.01H146.83V352.972Z' fill='white' />
        </mask>
        <g mask='url(#mask1_2090_75)'>
          <mask
            id='mask2_2090_75'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x={146}
            y={353}
            width={295}
            height={123}
          >
            <path
              d='M146.919 475.999C146.919 408.381 212.69 353.57 293.827 353.57C374.965 353.57 440.736 408.381 440.736 475.999H146.919Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask2_2090_75)'>
            <path d='M-4.24414 107.76H592.254V480.249H-4.24414V107.76Z' fill='currentColor' />
          </g>
        </g>
        <mask
          id='mask3_2090_75'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x={0}
          y={112}
          width={589}
          height={246}
        >
          <path d='M0 112H588.009V357.217H0V112Z' fill='white' />
        </mask>
        <g mask='url(#mask3_2090_75)'>
          <mask
            id='mask4_2090_75'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x={0}
            y={112}
            width={588}
            height={245}
          >
            <path
              d='M0.0107422 356.863C0.0107422 221.627 131.558 112.01 293.828 112.01C456.097 112.01 587.65 221.627 587.65 356.863H0.0107422Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask4_2090_75)'>
            <path d='M-4.24414 107.761H592.254V480.249H-4.24414V107.761Z' fill='currentColor' />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default IsologoCasa
