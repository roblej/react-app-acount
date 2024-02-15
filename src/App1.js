import { useState } from 'react';
import './App.css';
import Extest from './components/Extest'

function Btn(){
  let title='Hello';
  let [Num, setNum] = useState(0);
  return(
    <>
      <div>{ title }</div>
      <div> { Num }</div>
      <span onClick={()=> {setNum(Num+1)}}>클릭</span>
    </>
  )
}

function App() {
  let name ='Ten';
  return (
    <div className="App">
      <div className="nav">
        <h3 className="Red">Hello world</h3>
      </div>
      <h4>{name}</h4>
      <Btn></Btn>
      <Extest></Extest>
    </div>
  );
}

export default App;
