import React, { useState } from 'react'

export default function ColorButton() {
    const [r, setR] = useState(255);
    const [g, setG] = useState(255);
    const [b, setB] = useState(255);

    const decrementR = () => {
        if (r > 0) {
            setR(r - 1);
        }
    }

    const incrementR = () => {
        if (r < 255) {
            setR(r + 1);
        }
    }

    const decrementG = () => {
        if (r > 0) {
            setG(g - 1);
        }
    }

    const incrementG = () => {
        if (r < 255) {
            setG(g + 1);
        }
    }

    const decrementB = () => {
        if (r > 0) {
            setB(b - 1);
        }
    }

    const incrementB = () => {
        if (r < 255) {
            setB(b + 1);
        }
    }

    return (
        <>
        
        </>
    );
}