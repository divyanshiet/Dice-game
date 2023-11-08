import styled from "styled-components"

export default function Rule()
{
    return(
        <>
           <Rules>
              <div>
              <h3>
               How to play dice game
             </h3>
              <div>
              1. Select any number
              </div>
              <div>
              2. Click on dice image
              </div>
              <div>
              3. After click on dice if selected number is equal to dice number you will get same point as dice
              </div>
              <div>
              4. If you get wrong guess then 1 point will be deducted
              </div>
              </div>     
           </Rules>
        </>
    )
}

const Rules = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
margin-left: 180px;
border: 1px solid red;
background-color: red;
border-radius: 10px;
padding: 10px;
`