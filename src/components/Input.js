import React from 'react'

export default function Input(props) {

    const {type,name,className,placeholder,onChange,label} = props;

    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} name={name} className={className} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}
