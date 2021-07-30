import React from 'react';
import './style.css'
// import CallBackExple from './CallBackExple'
import ContextExple from './components/ContextExple'
// import RefExple from './RefExple'
// import MemoExple from './MemoExple'

import './style.css'
import RefExple from './components/RefExple';
import MemoExple from './components/MemoExple';

function App(){
    return (
        <div className="container is-mobile">
            {/* <ContextExple /> */}
            {/* <RefExple /> */}
            <MemoExple/>
        </div>)
}

export default App
