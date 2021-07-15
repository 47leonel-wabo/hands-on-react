import React, {useState} from 'react';

const Input = props => {

    const [name, setName] = useState('')

    return <>
        <div className="in-btn">
            <input type="text" value={name} onChange={$ev => setName($ev.target.value)} />
            <button onClick={() => props.handleUpdate(name)} disabled={!name}>Update name</button>
        </div>
    </>
}

export default Input