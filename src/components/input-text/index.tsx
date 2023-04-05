import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelProp: string
  valueProp: string
  typeProp: HTMLInputTypeAttribute
  onChange: (value: any) => void
}

const InputText: React.FC<InputProps> = ({
  labelProp,
  valueProp,
  typeProp,
  onChange
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value)

  return (
    <div>
      <label>{labelProp}</label>
      <input type={typeProp} value={valueProp} onChange={handleInputChange} />
    </div>
  )
}

export default InputText
