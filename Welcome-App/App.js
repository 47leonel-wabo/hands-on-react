import React from 'react';
import './style.css'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'Mysterious',
            name: ''
        }
    }

    handleUpdate = () => this.setState({
        username: this.state.name, 
        name: ''
    })

    handleValueChange = ($e) => this.setState({
        name: $e.target.value
    })

    render() { 
        // const [username] = this.state
        return ( 
            <>
                <div className="rt">
                    <h2>Welcome to the jungle</h2>
                    <p>Hi there, <strong>{this.state.username}</strong>!</p>
                    <p>Tell me what is your name, so we make conversation.</p>
                    <div className="in-btn">
                        <input type="text" value={this.state.name} onChange={this.handleValueChange} />
                        <button onClick={this.handleUpdate} disabled={!this.state.name}>Update name</button>
                    </div>
                </div>
            </>
         );
    }
}
 
export default App;