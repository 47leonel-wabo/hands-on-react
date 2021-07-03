import React from 'react';
import './style.css'
import Title from './components/Title';
import Greeting from './components/Greeting';
import Input from './components/Input';

const  App = props => {

    const [username, setUsername] = React.useState('')

    return ( 
        <>
            <div className="rt">
                <Title title="Welcome to React World" />
                <Greeting username={username} />
                <p className="conversation">Tell me what is your name, so we make conversation.</p>
                <Input handleUpdate={name => setUsername(name)} />
            </div>
        </>
        );
    
}
 
export default App;