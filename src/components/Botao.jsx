import React from 'react'

const Botao = ({children, onClick}) => {
  return (
    <button onClick={()=> onClick()}>{children}</button>
  )
}

export default Botao