import React from 'react'

import "./style.sass"

const Payment = () => {
  return (
   
<section className='resumetwo'>
    <div className="payment-type flex">
      <h1>Pagamento</h1>
        <div className="flex column">
            <button className="PIX">
                PIX
            </button>
            <button className="Cartões">
                Cartões
            </button>
            <button className="Boleto">
                Boleto
            </button>
        </div>
    </div>
    <div className="information">
        <h2>Pix</h2>
        <p>A melhor opção para compas à vista.</p>
        <p> Pague com PIX e aproveite até 15% OFF. Nessa modalidade, seu pedido
            é aprovado instantaneamente, o que torna a expedição do seu pedido
            ainda mais rápida.
        </p>
    </div>
</section>


  )
}

export default Payment