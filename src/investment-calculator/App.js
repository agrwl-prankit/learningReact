import Header from "./component/Header";
import '../investment-calculator/index.css';
import UserInput from "./component/UserInput";
import Result from "./component/Result";
import { useState } from "react";

function InvestmentCalculatorApp() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput((prevUserInput)=>{
            return{
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            }
        })
    }

    const isInvalidInput = userInput.duration >= 1;

    return (
        <>
        <Header/>
        <UserInput onChange={handleChange} userInput={userInput}/>
        { isInvalidInput ? <Result userInput={userInput}/> 
        : <p className="center">Please enter a duration greater than 0</p>}
        </>
    )
}

export default InvestmentCalculatorApp
