import { useState } from "react";
import styled from "styled-components";
import Rolldice from "./Rolldice"
import Rules from './Rules'

export default function Numbergenerator({tog}) {
    const numbers = ['1', '2', '3', '4', '5', '6'];
    const [val, setVal] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [showrules, setShowrules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const numCall = () => {
        if (val == 0) {
            alert("please select a number ;)");
        }
        else {
            const randomnum = generateRandomNumber(1, 7);
            setCurrentDice((prev) => prev = randomnum);

            if (val == randomnum) {
                setScore((prev) => prev + 1);
            }
            else {
                setScore((prev) => prev - 1);
            }
        }
    }

    const reset = () =>
    {
         setScore(0);
         setVal(0);
    }
    return (
        <>
            <Container1>
                <div className="score">
                    <div>{score}</div>
                    <p>Total score</p>
                </div>
                <div className="value">
                    {
                        numbers.map((data) => (
                            <Box isSelected={data === val}
                                onClick={() => setVal(data)}
                            >
                                {data}
                            </Box>
                        ))}
                </div>
                <div className="backbtn">
                    <button onClick={tog} >Back to Home</button>
                </div>
            </Container1>
            <Rolldice currentDice={currentDice} numCall={numCall} ></Rolldice>
            <Reset>
            <div className="rbut">
                <button onClick={reset} >Reset score</button>
            </div>
            </Reset>
            <Rule>
                  <div className="rulebtn">
                    <button onClick={() =>{
                        setShowrules((prev)=> !prev)
                    }}>{showrules ? "Hide" : "Show"} rules</button>
                  </div>
                  <div>
                  {showrules && <Rules />}
                  </div>
            </Rule>
        </>
    )
}
const Container1 = styled.div`
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      .value
      {
        display: flex;
        gap: 5px;
      }
      .backbtn button
      {
        width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    color: white;
    background-color: black;
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
      }

`
const Box = styled.div`
width: 72px;
height:72px;
border: 1px solid black ;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: bold;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")};
`
const Reset = styled.div`
display: flex;
align-items: center;
justify-content: center;

button
{
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    color: white;
    background-color: black;
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
}
`
const Rule = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button
{
    position: static;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    color: white;
    background-color: black;
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
}
`