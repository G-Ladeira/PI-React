import React from 'react'
import { ImUser } from "react-icons/im";

const VerPedidos = () => {
  return (
    <div className='user_optns'>
        <div className="user_data">
        <ImUser/>

        <h3 className='optn_name'>Pedidos</h3>
        <span>Veja aqui seus pedidos em andamento.</span>
        </div>
    </div>
  )
}

export default VerPedidos