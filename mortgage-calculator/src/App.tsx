import { useState } from 'react'
import './App.css'

//components
import ClearForm from './components/ClearForm';
import Input from './components/Input';

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
            <Input inputName="Mortgage Amount" icon="euro" iconDirection="start"></Input>
            <div className='termAndInterest'>
              <Input inputName="Mortgage Term" icon="years" iconDirection="end"></Input>
              <Input inputName="Interest Rate" icon="percent" iconDirection="end"></Input>
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
