import React from 'react'

const Item = ({tarea, onClick}) => {

 
  return (
    <div className='contenedor-lista'>
      <li>
        {tarea}
      </li>
    </div>
  )
}

export default Item
