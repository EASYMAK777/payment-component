import React, { useEffect, useRef } from 'react';

export default function Paypal() {
    
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            
        }).render(paypal.current) 
    }, [])
    
    return(
        <div>
            <div ref={paypal}></div>
        </div>
    )
}