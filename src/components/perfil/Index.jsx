import React from 'react'
import AlterCadastro from './dadosUsuario'
import VerPedidos from './pedidos'
import './style.sass'
import { ImUser } from "react-icons/im";


import { AiOutlineUser } from "react-icons/ai";

function UserView() {
  return (
    <div className='user_view'>
      <div className='hail'>
        <AiOutlineUser />
        <span className='wlcm'>Bem vindo, <strong>"nome do usuário"</strong></span>
      </div>

      <div className="dataSection">
        <div className='user_optns'>
          <div className="user_data">
            <ImUser />

            <h3 className='optn_name'>Cadastro</h3>
            <span>Altere seus dados cadastrais.</span>
          </div>


        </div>

        <AlterCadastro />
      </div>
      <div className="orderSection">

        


        <VerPedidos />
      </div>

    </div>
  )
}

export default UserView