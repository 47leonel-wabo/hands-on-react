import React from 'react';


const UseStateExpl = props => {

    const [showMessage, setShowMessage] = React.useState(false)
    const [formValue, setFormValue] = React.useState({
        name: '',
        age: '',
        email: '',
        gameConsole: ''
    })

    const handleChange = $evt => {
        const updateFormValues = {
            ...formValue,
            [$evt.target.id]: $evt.target.value // reference the id element in the html, which will match with "formValue"
        }
        setFormValue(updateFormValues)
    }

    const handleSubmit = $evt => {
        $evt.preventDefault()
        setShowMessage(true)
    }

    return <>
    <p>Fill the form below</p>
    <form onSubmit={(evt) => handleSubmit(evt)} style={{display: 'flex', flexDirection: 'column', width: '400px', margin: 'auto', padding: '16px'}}>
        <div style={{marginTop: '16px'}}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" value={formValue['name']} onChange={(e) => handleChange(e)} />
        </div>

        <div style={{marginTop: '16px'}}>
            <label htmlFor="age">How old are you?</label>
            <input type="text" id="age" value={formValue['age']} onChange={(e) => handleChange(e)} />
        </div>

        <div style={{marginTop: '16px'}}>
            <label htmlFor="email">What's your email?</label>
            <input type="email" id="email" value={formValue['email']} onChange={(e) => handleChange(e)} />
        </div>

        <div style={{marginTop: '16px'}}>
            <label htmlFor="gameConsole">What's your game console?</label>
            <select id="gameConsole" value={formValue['gameConsole']} onChange={(e) => handleChange(e)}>
                <option>Xbox One</option>
                <option>Xbox Serie X</option>
                <option>Sony PS3</option>
                <option>Sony PS4</option>
                <option>Sony PS5</option>
                <option>Google Stadia</option>
                <option>Unknown</option>
            </select>
        </div>
        <button style={{
          marginTop: '16px',
          color: 'white',
          backgroundColor: 'tomato',
          padding: '10px',
          border: 'none'
        }}>Submit</button>
    </form>
    {showMessage && (
        <div className="form-msg">
            <p>
                Hi <strong>{formValue['name']}</strong>, what a beautiful name. And you got 
                <strong>{formValue['age']}</strong> that's no age. 
                Can we message you at <em>{formValue['email']}</em>, for more relationship value?
                Wooh! you do really love <strong>{formValue['gameConsole']}</strong> like me!
            </p>
        </div>
    )}
    </>
}

export default UseStateExpl