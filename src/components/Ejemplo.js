import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Ejemplo = () => {
    const [mostrar, setMostrar] = useState(false);
    const caja = useRef();
    const boton = useRef();
    useLayoutEffect(() => {
        console.log("Use layouteffect")
    }, [])

    useEffect(() => {
        if(caja.current == null) return 
        const {button} = boton.current.getBoundingClientRect();

        setTimeout(() => {
            caja.current.style.left = `${button + 46}px`
        }, 1000)
        
    }, [mostrar])

  return (
    <div>
        <h1>use effect y useLayoutEffect</h1>
        <button ref ={boton} onClick={() => setMostrar(prev => {
            console.log(prev, !prev)
            return !prev
        })}>Show</button>
        {mostrar && (
            <div ref = {caja}>hola soy un mensaje {mostrar}</div>
        )}
    </div>
  )
}
