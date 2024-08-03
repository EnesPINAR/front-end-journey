import { useState, useCallback, useEffect } from 'react'
import './App.css'

//components
import ClearForm from './components/ClearForm';
import Input from './components/Input';
import ResultArea from './components/ResultArea';

function App() {

  //states
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);

  //callbacks
  const MortgageAmount = useCallback((childData) => {
    setAmount(childData);
  }, []);

  const MortgageTerm = useCallback((childData) => {
    setTerm(childData);
  }, []);

  const InterestRate = useCallback((childData) => {
    setInterestRate(childData);
  }, []);

  //effects
  useEffect(() => {
    if(total == 0){setMonthly(0);}
    else{setMonthly(total / (term * 12))}
  }, [total, term]);

  return (
    <>
      <div className="container">
        <div className="left">
          <form action="">
            <div className="head">
              <h2>Mortgage Calculator</h2>
              <ClearForm></ClearForm>
            </div>
            <Input inputName="Mortgage Amount" icon="euro" iconDirection="start" onMortgageAmount={MortgageAmount}></Input>
            <div className='termAndInterest'>
              <Input inputName="Mortgage Term" icon="years" iconDirection="end" onMortgageTerm={MortgageTerm}></Input>
              <Input inputName="Interest Rate" icon="percent" iconDirection="end" onInterestRate={InterestRate}></Input>
            </div>
            <button type="submit" onClick={(e) => { e.preventDefault(); setTotal((amount * Math.pow(1 + interestRate / 100, term))); setShowResult(true) }}>
              <img src="../src/assets/images/icon-calculator.svg" alt="calculator img" />
              Calculate Repayments
            </button>
          </form>
        </div>
        <div className="right">
          <ResultArea showResult={showResult} monthly={monthly} total={total}></ResultArea>
        </div>
      </div>
    </>
  )
}

export default App
