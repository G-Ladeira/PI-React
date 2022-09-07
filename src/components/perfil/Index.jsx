import React from 'react'
import AlterCadastro from './dadosUsuario'
import VerPedidos from './pedidos'
import './style.sass'

import { AiOutlineUser } from "react-icons/ai";

function UserView() {
  return (
    <div className='user_view'>
        <div className='hail'>
            <AiOutlineUser/>
            <span className='wlcm'>Bem vindo, <strong>"nome do usuário"</strong></span>
        </div>

    <AlterCadastro/>
    <VerPedidos/>

    </div>
  )
}

export default UserView