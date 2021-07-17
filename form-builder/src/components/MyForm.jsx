import React, { useState } from 'react';
import FormInputField from './FormInputField';

const MyForm = ({formFieldArray, handleFormsubmit}) => {

    const [formValues, setFormValues] = useState({})

    // handle form submission action
    const handleOnFormSubmission = (event) => {
        event.preventDefault()
        if(handleFormsubmit){
            handleFormsubmit(formValues)
        }
    }

    // once form values changed
    const handleFormValueChange = (fieldName, fieldValue) => {
        // first, maintain object properties values not changed, and update properties which have changed
        setFormValues({...formValues, [fieldName]: fieldName})
    }

    return (
        <form onSubmit={handleOnFormSubmission}>
            {formFieldArray.map(fields => (
                <FormInputField 
                    key={fields.fieldName} 
                    handleFieldValueChange={handleFormValueChange} 
                    {...fields} />
                    )
                )}
            <div className="control">
                <button className="button is-primary is-normal">Sign in</button>
            </div>
        </form>
    )
}

export default MyForm