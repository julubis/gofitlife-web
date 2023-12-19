import { useEffect, useState, useRef } from 'react';

function ChartBMI({bmi}) {
  const [init, setInit] = useState(0);
  const startRef = useRef(null);
  const animateCounter = (ts) => {
    if (!startRef.current) {
      startRef.current = ts
    }
    const progress = ts - startRef.current;
    const duration = 800
    const percent = Math.min(progress / duration, 1);
    const animateValue = Math.floor(percent * 100);
    setInit(animateValue)

    if (percent < 1) {
      requestAnimationFrame(animateCounter)
    }
  }
  useEffect(() => {
    startRef.current = null;
    requestAnimationFrame(animateCounter)
  }, [bmi])

  return (
    <div className="relative">
      <svg width="136" height="136" viewBox="0 0 136 136" className="rotate-[150deg]">
        <circle r="56" cx="68" cy="68" fill="transparent" className={`${bmi < 18.5 ? 'stroke-yellow-100' : bmi < 25 ? 'stroke-blue-100' : bmi < 30 ? 'stroke-orange-100' : 'stroke-red-100'}`} strokeWidth="16px" strokeDasharray="351.68px" strokeDashoffset={`${351.68 * (100 - init * 1.3 / 2) / 100}px`}></circle>
        <circle r="56" cx="68" cy="68" fill="transparent" className={`${bmi < 18.5 ? 'stroke-yellow-500' : bmi < 25 ? 'stroke-blue-500' : bmi < 30 ? 'stroke-orange-500' : 'stroke-red-500'}`} strokeWidth="16px" strokeDasharray="351.68px" strokeDashoffset={`${351.68 * (100 - init * (bmi < 18.5 ? .25 : bmi < 25 ? .5 : bmi < 30 ? .75 : 1) * 1.1 / 2) / 100}px`}></circle>
      </svg>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-lg">{parseFloat(bmi)}</p>
    </div>
  )
}

export default ChartBMI;