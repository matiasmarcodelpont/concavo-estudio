const COLORS = [
  '#CCA9BC',
  '#A180A9',
  '#904C40',
  '#6D9485',
  '#2B4837',
  '#194F7C',
  '#EAE4DF',
  '#A9A6A8',
  '#4C4C4C',
  '#101011',
]

const ConcavoColors = () => {
  return (
    <>
      <div className='flex gap-1'>
        {COLORS.map((color) => (
          <span key={`concavo-color-rect-${color}`} style={{ backgroundColor: color }} className='grow max-w-10 h-12' />
        ))}
      </div>

      <br />

      <div className='flex gap-2 flex-wrap'>
        <div className='flex gap-2'>
          {COLORS.slice(0, 5).map((color) => (
            <span
              key={`concavo-color-round-${color}`}
              style={{ backgroundColor: color }}
              className='size-7 rounded-full shrink-0'
            />
          ))}
        </div>
        <div className='flex gap-2'>
          {COLORS.slice(5).map((color) => (
            <span
              key={`concavo-color-round-${color}`}
              style={{ backgroundColor: color }}
              className='size-7 rounded-full shrink-0'
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ConcavoColors
