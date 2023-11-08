import { useState } from 'react';
import './App.css';
import First from './Components/firstpage/First';
import Numbergenerate from './Components/secondpage/Numbergenerate';

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);
  const [isBack, setBack] = useState(false);

  const istoggle = () =>
  {
    setisGameStarted((prev)=> !prev);
    setBack((prev) => !prev)
  }
  const istog = () =>
  {
    setBack((prev) => !prev)
    setisGameStarted((prev)=> !prev);
  }
  return (
    <>
      { isGameStarted && isBack ? <Numbergenerate tog={istog} /> : <First toggle={istoggle} />}
    </>
  );
}

export default App;
