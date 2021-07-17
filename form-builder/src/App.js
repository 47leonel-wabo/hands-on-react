import React, { useState } from 'react';
import './App.css';
import data from './data/formFieldsProperties.json'
import MyForm from './components/MyForm'

function App() {

  const [submittedFormValues, setSubmittedFormValues] = useState([])

  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-size-2">Form Builder</h1>
          <hr />
          <div className="columns">
            <div className="column">
              <h2 className="title is-size-4">Sign up for an account</h2>
              <div className="box">

                <MyForm 
                  handleFormsubmit={value => setSubmittedFormValues(value)} 
                  formFieldArray={data.fields} />

              </div>
            </div>
            <div className="column is-offset-1">
              <div className="content">
                <h2 className="title is-size-4">Form result</h2>
                <p>Form result with be summarized here each time you click 'sign up' button</p>
                <div className="notification">

                  <div className="notification">
                    {
                      Object.values(submittedFormValues).length <= 0 &&
                      <p>Submit a form to see the values</p>
                    }
                    {
                      Object.entries(submittedFormValues).map(([k, v]) => <li key={k}>{v}</li>)
                    }
                  </div>
                  
                </div>
                <button 
                  className="button is-light"
                  onClick={() => setSubmittedFormValues({})} 
                >
                  clear form
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
