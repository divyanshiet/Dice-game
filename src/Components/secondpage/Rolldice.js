import styled from 'styled-components'

export default function Roll({numCall, currentDice})
{
    return(
        <>
          <Dice>
               <div>
                  <div className="dice" onClick={numCall}>
                  <img  src={`./assets/dice_${currentDice}.png`}></img>  {/* //Backticks are required */}
                  </div>
                  <p>Click on dice to roll</p>
               </div>
          </Dice>
           
        </>
    )
}

const Dice = styled.div`
margin-top: 48px;
 display: flex;
 flex-direction: column;
 align-items: center;
.dice
{
    cursor: pointer;
}
 p{
    font-size: 24px;
 }
`