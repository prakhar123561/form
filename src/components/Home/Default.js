import { useState } from 'react'
import CheckBox1 from '../../components/desktop/Default'

export default function Default ({width="360px",height="50px",border="1px solid #000",bgcolor="#fff",padding='10px',size='16px',text=""}){
    const [status, setStatus] = useState(false)
    const handleClick = ()=>{
        setStatus(!status)
       
    }
    return (
        <div style={{background:bgcolor,  height:height, border:border, display:'flex', justifyContent:'flex-start', alignItems:'center', padding:padding, fontSize:size, fontWeight: 400}}>
            <div onClick={handleClick} style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexDirection:'row',width:width}}>
              <text style={{padding:'5px'}}>{text}</text>
              <CheckBox1 width={'15px'} status={status}/>
            </div>
        </div>
    )
}