import './CheckBoxCss.css'
import { useState } from 'react'
export default function Default(props,{width="20px", height="20px"}) {

    const [isChecked, setIsChecked] = useState(props?.status);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
    
    return (
            <input type="checkbox" 
            style={{width:width, 
                height:height, 
                cursor: 'pointer',
                borderRadius: '5px' 
            }}
            checked={props.status}
            onChange={handleOnChange}
            />
            
    )
}