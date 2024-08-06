import React from 'react';

const ResultArea = (props) => {
    if (props.showResult) {
        return <div className="result">
            <h3>Your Results</h3>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click 'calculate repayments' again.</p>
            <div className="ResultContainer">
                <p>Your monthly repayments</p>
                <p className="monthlyResult">€{Number(props.monthly.toFixed(2))}</p>
                <div className="line"></div>
                <p>Total you will repay over the therm</p>
                <p className="totalResult">€{Number(props.total.toFixed(2))}</p>
            </div>
        </div>
    } else {
        return <div>
            <img src="../src/assets/images/illustration-empty.svg" alt="calculator img" />
            <h3>Results shown here</h3>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
    }
}

export default ResultArea;