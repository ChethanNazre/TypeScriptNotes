import {useState, useRef, useEffect } from 'react';

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | undefined >(undefined)

    const stopTimer = () => {
        window.clearInterval(intervalRef.current)
    }
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer)=> timer + 1)
        }, 1000)

        return () => {
            stopTimer()
            //Cleanup function to clear the interval when the component unmounts
            //or when the effect is re-run.
        }
    }, [])

  return (
    <div>HookTimer - {timer}
    <button onClick = {() => stopTimer()}> Stop Timer </button>
    </div>
  )
}