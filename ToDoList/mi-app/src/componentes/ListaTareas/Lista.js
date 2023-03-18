import React from 'react'
import Item from '../Item/Item'
import './lista.css'

const Lista = ({tareas, onClick}) => {
  return (
    <div className='contenedor-tareas'>
       
        <ol> 
        {
            tareas.map( (tarea,index) => { 
              return (
                <div className={"fila-"+(index+1)} key={index+1}><span className='tarea'> <Item tarea={tarea}/> </span>
                  <button title="Eliminar Tarea" className={"btn-borrar"+(index+1)} onClick={() => onClick(index)}>Eliminar Tarea
                  </button>
                </div>)
            })
        }
        </ol>
      
    </div>
  )
}

export default Lista
