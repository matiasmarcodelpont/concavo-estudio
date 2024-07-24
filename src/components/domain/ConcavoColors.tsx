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
      <div className='flex gap-1 flex-wrap'>
        <div className='flex gap-1'>
          {COLORS.slice(0, 5).map((color) => (
            <span key={`concavo-color-${color}`} style={{ backgroundColor: color }} className='size-8 shrink-0' />
          ))}
        </div>
        <div className='flex gap-1'>
          {COLORS.slice(5).map((color) => (
            <span key={`concavo-color-${color}`} style={{ backgroundColor: color }} className='size-8 shrink-0' />
          ))}
        </div>
      </div>
    </>
  )
}

export default ConcavoColors
