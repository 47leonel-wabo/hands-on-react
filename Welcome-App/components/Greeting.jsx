import React from 'react';

const Greeting = (props) => <p>Hi there, <strong>{props.username || 'Mysterious'}</strong>!</p>

export default Greeting