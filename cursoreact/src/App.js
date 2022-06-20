import './App.css'
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';

const nome = "Thiago"
const idade = "19"
const profissão = "desempregado"

function App() {
  return (
    <div className="App">
      <SayMyName nome={nome}/>
      <Pessoa nome={nome} idade={idade} profissão={profissão} foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH_4_YxgzRC-LZNB76KQmhYc3UjzXCbaGAw&usqp=CAU"/>
      

    </div>
  )
}

export default App;
