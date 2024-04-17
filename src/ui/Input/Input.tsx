import React from 'react'
import cl from "./Input.module.css"
interface props{
    isValue: string;
    setValue: (smth:string)=>void;
    placeholder: string;
    name: string;
    style?: {};
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>)=>void
}

export const Input = ({isValue,setValue,name,placeholder, style={},onKeyDown=()=>{}}:props) => {
  return (
    <label className={cl.Input} data-testid="custom-input-element" >
        {name}
        <input 
          value={isValue} 
          onChange={(e)=>setValue(e.target.value)} 
          placeholder={placeholder} 
          style={style}
          onKeyDown={onKeyDown} data-testid="custom-input-element-input"/>
    </label>
  )
}
