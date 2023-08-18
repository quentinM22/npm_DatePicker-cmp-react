import React, { ChangeEvent, useState } from "react";

export interface DatePickerProp {
    maxDate: string;
    idInput: string;
    className?: string;
}

const DatePicker = (
    {maxDate, idInput, className} : DatePickerProp,
    ) => {
    const [newValue, setNewValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value);
    };
    return ( 
    <>
        <input
         type="date"
         max={maxDate} 
         onChange={handleChange}
         value={newValue} 
         id={idInput}
         className={className}/>
    </> 
    )
}
export default DatePicker