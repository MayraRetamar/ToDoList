import React from 'react'

const Inputs = ({inputValue, agregarTareas, onChange}) => {
   
    const handleSubmit = (e) => {
      e.preventDefault()
      agregarTareas()
    }
  return (
    <div className='contenedor-formulario'>
      <form onSubmit={handleSubmit}>
        <input type = "text" className='input' onChange={(e)=>{onChange(e.target.value)}} value = {inputValue} placeholder='Agregue su tarea'/>
        <button className='btn' type ="submit" >Agregar Tarea</button>
      </form>
    </div>
  )
}

export default Inputs
