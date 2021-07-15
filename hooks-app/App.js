import React from 'react'
import UseEffectExpl from './UseEffectExpl'
import UseStateExpl from './UseStateExpl'

function App() {
  const [example, setExample] = React.useState('useStateExample')

  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <h1>Choose an example</h1>
      <button onClick={() => setExample('useStateExample')}>
        useState example
      </button>
      <button
        onClick={() => setExample('useEffectExample')}
        style={{
          marginTop: '16px',
          color: 'white',
          backgroundColor: 'tomato',
          margin: '10px',
        }}
      >
        useEffect example
      </button>
      <div className="container">
        {example === 'useStateExample' ? <UseStateExpl /> : <UseEffectExpl />}
      </div>
    </div>
  )
}

export default App
