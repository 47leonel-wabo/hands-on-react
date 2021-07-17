import React, { useState } from 'react';

const FormInputField = (
  {
    label,
    type,
    fieldName,
    placeholder,
    helpText,
    required,
    handleFieldValueChange
  }
) => {

  const [fieldValue, setFieldValue] = useState('')

  const handleOnInputChange = evt => {
    setFieldValue(evt.target.value)
    if(handleFieldValueChange){
      handleFieldValueChange(evt.target.name, evt.target.value)
    }
  }

  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            type={type}
            value={fieldValue}
            name={fieldName}
            placeholder={placeholder}
            required={required || false}
            onChange={handleOnInputChange}
          />
        </div>
        {
          helpText && <p className="help">{helpText}</p>
        }
      </div>
    </>
  )
}

export default FormInputField