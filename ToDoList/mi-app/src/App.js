import { useState } from 'react';
import './App.css';
import Inputs from './componentes/Inputs/Inputs';
import Lista from './componentes/ListaTareas/Lista';
import Item from './componentes/Item/Item';
import Titulo from './componentes/Titulo/Titulo';


function App() {

  const [tareas, setTareas] = useState([]);

  const [inputValue, setInputValue] = useState("")

  const AgregarTareas = () => { 
    setTareas([...tareas, inputValue])
  }

  const borrarTareas = (indice) => { 
      setTareas((tarea) => tarea.filter((item, i) => indice !== i))
  }

  return (
    <div className="App">
      <Titulo/>
      <Inputs value={inputValue} agregarTareas= {AgregarTareas} onChange = {setInputValue} />
      <Lista tareas={tareas} onClick= {borrarTareas} />
      <Item />
    </div>
  );
}

export default App;
