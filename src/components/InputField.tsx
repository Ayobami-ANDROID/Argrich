import React from 'react'

const InputField = ({
    label,
    placeHolder,
    name,
    onChange,
    type,
    InputStyle,
    value,
    error,
    errorText,
    className,
    disabled,
    defaultValue,
    min,
    max,
    onBlur
  }) => {
  return (
    <div className="flex flex-col w-full mb-2">
    <label htmlFor="" className="text-[#344054]">
      {label}
    </label>

    <input
      type={type ? type : "text"}
      placeholder={placeHolder}
      className={`border ${
        error ? "border-red-500" : "border"
      } ${className}  rounded-[5px] shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)] h-10 border w-full pl-4 text-[#11233D] text-md font-normal placeholder:font-normal outline-none ${
        InputStyle && InputStyle.className
      }`}
      style={InputStyle && InputStyle.style}
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      defaultValue={defaultValue}
      min={min}
      max={max}
      onBlur={onBlur}
    />
    {error && <p className="text-xs text-red-500">{errorText}</p>}
  </div>
  )
}

export default InputField