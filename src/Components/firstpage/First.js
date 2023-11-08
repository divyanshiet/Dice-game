import styled from 'styled-components'

export default function First({toggle}) {
    return (
        <>
            <Container>
                <div>
                    <img src='/assets/dices.png' ></img>
                </div>
                <div className='content'>
                    <h1>DICE GAME</h1>
                    <button onClick={toggle}>Play now</button>
                </div>
            </Container>
        </>
    )
};

const Container = styled.div`
width: 1400px;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;

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
.content h1
{
    font-size: 96px;
}
`