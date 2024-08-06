import React from "react";

const Input = (props) => {

    const sendMortgageAmount = (e) => {
        props.onMortgageAmount(e.target.value);
    };

    const sendMortgageTerm = (e) => {
        props.onMortgageTerm(e.target.value);
    };

    const sendInterestRate = (e) => {
        props.onInterestRate(e.target.value);
    };

    if (props.icon == 'euro') {
        return <div>
            <label htmlFor={props.inputName}>{props.inputName}</label>
            <div className={'Input' + ' ' + props.iconDirection}>
                <span>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10h9.231M6 14h9.231M18 5.086A5.95 5.95 0 0 0 14.615 4c-3.738 0-6.769 3.582-6.769 8s3.031 8 6.769 8A5.94 5.94 0 0 0 18 18.916" />
                    </svg>
                </span>
                <input type="number" min="0" name={props.inputName} onChange={sendMortgageAmount}/>
            </div>
        </div>
    } else if (props.icon == 'years') {
        return <div>
            <label htmlFor={props.inputName}>{props.inputName}</label>
            <div className={'Input' + ' ' + props.iconDirection}>
                <span>
                    <p>years</p>
                </span>
                <input type="number" min="0" name={props.inputName} onChange={sendMortgageTerm}/>
            </div>
        </div>
    } else if (props.icon == 'percent') {
        return <div>
            <label htmlFor={props.inputName}>{props.inputName}</label>
            <div className={'Input' + ' ' + props.iconDirection}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="m18.5 3.5l-15 15l2 2l15-15M7 4a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m10 10a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                </span>
                <input type="number" min="0" name={props.inputName} onChange={sendInterestRate}/>
            </div>
        </div>
    }
}

export default Input;