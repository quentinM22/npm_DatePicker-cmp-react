import React, { ChangeEvent } from "react";

/**
 * DatePicker - Component - Selecting a date
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.maxDate - Maximum allowed date for selection.
 * @param {string} props.idInput - ID attribute
 * @param {string} [props.className] - class name for styling.
 * @param {Function} props.setState - Function to set the selected date value.
 * @param {string} props.state - selected date value.
 * @returns {JSX.Element} - DatePicker component JSX element.
 * 
 * @author
 */

export interface DatePickerProp {
    maxDate: string;
    idInput: string;
    className?: string;
    setState: (value: string) => void;
    state: string;
}

const DatePicker = (
    {maxDate, idInput, className, setState, state} : DatePickerProp,
    ) => {
        const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
            const value = e.target.value;
            setState(value);
        }
    return ( 
    <>
        <input
         type="date"
         max={maxDate} 
         onChange={handleChange}
         value={state} 
         id={idInput}
         className={className}/>
    </> 
    )
}
export default DatePicker