import { useEffect, useState, useRef } from 'react';

function Chart({n}) {
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
  }, [n])

  return (
    <svg width="136" height="136" viewBox="0 0 136 136" id="progress" className="-rotate-90">
      <circle r="56" cx="68" cy="68" fill="transparent" className="stroke-emerald-100" strokeWidth="16px" strokeDasharray="351.68px" strokeDashoffset={`${351.68 * ((100 - init)/100)}px`}></circle>
      <circle id="stroke-progress" r="56" cx="68" cy="68" fill="transparent" className="stroke-emerald-300" strokeWidth="16px" strokeLinecap="" strokeDasharray="351.68px" strokeDashoffset={`${351.68 * ((100 - init * 0.26875)/100)}px`}></circle>
      <circle id="stroke" r="56" cx="68" cy="68" fill="transparent" className="stroke-emerald-500" strokeWidth="16px" strokeLinecap="" strokeDasharray="351.68px" strokeDashoffset={`${351.68 * ((100 - init * 0.16875)/100)}px`}></circle>
    </svg>
  )
}

export default Chart;