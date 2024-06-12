const AnimatedX = () => {
  return (
    <div className='absolute left-7 sm:left-6 space-y-[4px] translate-y-[-3px] sm:translate-y-1'>
      <div
        key='bar-1'
        className='w-[16px] h-[1.5px] sm:w-[23px] sm:h-[2.6px] bg-black rounded-sm transition-all animate-transform-translate-mini sm:animate-transform-translate'
      />
      <div
        key='bar-2'
        className='w-[16px] h-[1.5px] sm:w-[23px] sm:h-[2.6px] bg-black rounded-sm transition-all animate-transform-translate-negative-mini sm:animate-transform-translate-negative'
      />
    </div>
  )
}

export default AnimatedX
