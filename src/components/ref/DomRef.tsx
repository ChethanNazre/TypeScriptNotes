import { useRef, useEffect } from 'react';

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current?.focus()
        //Allows us to access the DOM element directly
    }, [])

  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}