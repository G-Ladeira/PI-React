import React from 'react'
import "./check.sass"

const Resume = () => {
  return (

    <div className='resume'>
      <h2>Resumo de compras</h2>
      <table>
        <p>Valor total: R$ xxx,xx</p>
      </table>
      <div className="resume-buttons">
        <button>Seguir para o pagamento</button>
        <button>Continuar comprando</button>
      </div>
    </div>
  )
}

export default Resume