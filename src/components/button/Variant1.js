import './ButtonCss.css'
import { useState } from 'react'
export default function Variant1(){
    const [color, setColor] = useState('#FFCE22')
    const handleClick = () =>{ 
        setColor((prev)=>prev === '#FFCE22' ?  '#FFD84D' : '#FFCE22')
    }

    const handleMouseEnter = () =>{
        setColor('#FFD84D')

    }

    const handleMouseLeave = () =>{
        setColor( '#FFCE22')

    }



    return(
        <div className="button1" onClick={handleClick} onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        style={{backgroundColor:color,
            padding: '10px 20px',
            width: '340px',
            height: '40px',
            borderRadius: '4px',
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor:'pointer'
            }}>
            <text style={{fontSize:'16px', fontWeight:'600'}}>Done</text>
        </div>
    )
}