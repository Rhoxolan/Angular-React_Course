import React, { useState } from 'react'
import "./RGB.css"

export default function RGB() {
    const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

    const buttonClasses = {
        r: 'btn-outline-danger',
        g: 'btn-outline-success',
        b: 'btn-outline-primary',
      };
    
    return (
        <>
            <div className='mb-3'>
                <div style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }} className='form-control border-primary border-opacity-75' id='colorDiv'>
                </div>
            </div>
            <div className='mb-3 d-flex'>
                {
                    Object.keys(color).map(k => {
                        return (
                            <div key={k} className='d-flex align-items-center me-2'>
                                <div className='me-1'>
                                    {k.toUpperCase()}:
                                </div>
                                <div className='form-control border-secondary'>
                                    {color[k]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    Object.keys(color).map(k => {
                        return (
                            <div key={k} className='btn-group mb-2 d-block'>
                                <button className={`btn ${buttonClasses[k]} rgbButton`} onClick={() => { if (color[k] < 255) setColor({ ...color, [k]: color[k] + 1 }); }}>
                                    {k.toUpperCase()}++
                                </button>
                                <button className={`btn ${buttonClasses[k]} rgbButton`} onClick={() => { if (color[k] > 0) setColor({ ...color, [k]: color[k] - 1 }); }}>
                                    {k.toUpperCase()}--
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

//Version without loops

// import React, { useState } from 'react'
// import "./RGB.css"

// export default function RGB() {
//     const [r, setR] = useState(255);
//     const [g, setG] = useState(255);
//     const [b, setB] = useState(255);

//     const decrementR = () => {
//         if (r > 0) {
//             setR(r - 1);
//         }
//     }

//     const incrementR = () => {
//         if (r < 255) {
//             setR(r + 1);
//         }
//     }

//     const decrementG = () => {
//         if (g > 0) {
//             setG(g - 1);
//         }
//     }

//     const incrementG = () => {
//         if (g < 255) {
//             setG(g + 1);
//         }
//     }

//     const decrementB = () => {
//         if (b > 0) {
//             setB(b - 1);
//         }
//     }

//     const incrementB = () => {
//         if (b < 255) {
//             setB(b + 1);
//         }
//     }

//     return (
//         <>
//             <div className='mb-3'>
//                 <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} className='form-control border-primary border-opacity-75' id='colorDiv'>
//                 </div>
//             </div>
//             <div className='mb-3 d-flex'>
//                 <div className='d-flex align-items-center me-2'>
//                     <div className='me-1'>
//                         R:
//                     </div>
//                     <div className='form-control border-secondary'>
//                         {r}
//                     </div>
//                 </div>
//                 <div className='d-flex align-items-center me-2'>
//                     <div className='me-1'>
//                         G:
//                     </div>
//                     <div className='form-control border-secondary'>
//                         {g}
//                     </div>
//                 </div>
//                 <div className='d-flex align-items-center me-2'>
//                     <div className='me-1'>
//                         B:
//                     </div>
//                     <div className='form-control border-secondary'>
//                         {b}
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className='btn-group mb-2 d-block'>
//                     <button className='btn btn-outline-danger rgbButton' onClick={incrementR}>
//                         R++
//                     </button>
//                     <button className='btn btn-outline-danger rgbButton' onClick={decrementR}>
//                         R--
//                     </button>
//                 </div>
//                 <div className='btn-group mb-2 d-block'>
//                     <button className='btn btn-outline-success rgbButton' onClick={incrementG}>
//                         G++
//                     </button>
//                     <button className='btn btn-outline-success rgbButton' onClick={decrementG}>
//                         G--
//                     </button>
//                 </div>
//                 <div className='btn-group mb-2 d-block'>
//                     <button className='btn btn-outline-primary rgbButton' onClick={incrementB}>
//                         B++
//                     </button>
//                     <button className='btn btn-outline-primary rgbButton' onClick={decrementB}>
//                         B--
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }