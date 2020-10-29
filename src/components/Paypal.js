import React, { useEffect, useRef } from 'react';

export default function Paypal() {
    
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            
        }) 
    }, [])
    
    return(
        <div>
            <div ref={paypal}></div>
        </div>
    )
}