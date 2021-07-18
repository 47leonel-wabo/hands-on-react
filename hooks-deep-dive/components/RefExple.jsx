import React, { useState, useRef } from 'react';

const ModalBox = ({isOpen = false, handleModalClick}) => (
    // This modal component will show when (isOpen === is-active)
    // <div className={`modal is-clipped  ${props.isOpen} ? 'is-active' : ''`}>
    // <div className={`${isOpen} ? 'modal' : 'modal'`}>
    <div className={isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Modal using ref</p>
                <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                    dolorum enim tempore cum et quaerat voluptatibus perspiciatis iusto officiis atque!
                    dolorum enim tempore cum et quaerat voluptatibus perspiciatis iusto officiis atque!
                </p>
            </section>
            <footer className="modal-card-foot">
                <button className="button is-success" onClick={handleModalClick}>Save changes</button>
                <button className="button" onClick={handleModalClick}>Cancel</button>
            </footer>
        </div>
    </div>
)

export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const myRefs = useRef(null)

    const onModalClick = () => {
        setIsModalOpen(false)
        myRefs.current.focus()
    }

    return (
        <div className="container">
        <section className="columns is-centered">
            <div className="column is-4">
            {/* 
                Dummy form get at http://bulma.io/documentation/form/general/
                a 'ref' is attached to the textarea of the form, to show case
            */}
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input onChange={(evt) => console.log(evt.target.value)} className="input" type="text" placeholder="Text input"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input onChange={(evt) => console.log(evt.target.value)} className="input is-success" type="text" placeholder="Text input" value="bulma"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                    </span>
                </div>
                <p className="help is-success">This username is available</p>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input onChange={(evt) => console.log(evt.target.value)} className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field">
            <label className="label">Subject</label>
                <div className="control">
                    <div className="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                    </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea" ref={myRefs}></textarea>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="checkbox">
                    <input onChange={(evt) => console.log(evt.target.value)} type="checkbox"/>
                    I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="radio">
                    <input onChange={(evt) => console.log(evt.target.value)} type="radio" name="question"/>
                    Yes
                    </label>
                    <label className="radio">
                    <input onChange={(evt) => console.log(evt.target.value)} type="radio" name="question"/>
                    No
                    </label>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button 
                        className="button is-link"
                    >Submit</button>
                </div>
                <div className="control">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="button is-link is-light">Show modal</button>
                </div>
            </div>
            {/* Once the modal is closed, the textfield in the form get focus */}
            <ModalBox isOpen={isModalOpen} handleModalClick={onModalClick} />
            </div>
        </section>
        </div>
    )
}