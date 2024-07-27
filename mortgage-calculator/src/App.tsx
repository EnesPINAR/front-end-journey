import { useState } from 'react'
import './App.css'

//components
import ClearForm from './components/ClearForm'

function App() {

  return (
    <>
      <div className="container">
        <div className="left">
            <form action="">
              <div className="head">
                <h2>Mortgage Calculator</h2>
                <ClearForm></ClearForm>
              </div>
              <div>
                <label htmlFor="amount">Mortgage amount</label>
                <input type="number" name='amount'/>
              </div>
              <div className='termAndInterest'>
                <div>
                  <label htmlFor="term">Mortgage Term</label>
                  <input type="number" name='term' />
                </div>
                <div>
                  <label htmlFor="rate">Interest Rate</label>
                  <input type="number" name='rate'/>
                </div>
              </div>
              <button type="submit">
                <img src="../src/assets/images/icon-calculator.svg" alt="calculator img" />
                Calculate Repayments
              </button>
            </form>
        </div>
        <div className="right">
          <img src="../src/assets/images/illustration-empty.svg" alt="calculator img" />
          <h3>Results shown here</h3>
          <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
      </div>
    </>
  )
}

export default App
