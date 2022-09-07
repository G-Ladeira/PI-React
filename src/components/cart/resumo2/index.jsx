import React from 'react'

import "./style.sass"

const Resume2 = () => {
  return (
    <div className='resume2'>
      <h2>Resumo de compras</h2>
      <table>
        <p>Valor total: R$ xxx,xx</p>
      </table>
      <div className="resume-buttons2">
      <button>PIX</button>
      <button>BOLETO</button>
        <button>CARTÃO</button>
      </div>
    </div>
  )
}

export default Resume2