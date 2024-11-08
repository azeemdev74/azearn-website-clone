
import React from 'react'

const InputField = ({placeholder,title,type}) => {



  return (
    <div className='d-flex flex-column'>
    <label className='authLabel'>{title}</label>
    <input className='authInput' type={type} placeholder={placeholder} />          
</div>
  )
}

export default InputField
