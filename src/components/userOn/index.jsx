import React from 'react'
import './style.sass'


const UserLogged = () => {
  return (

    <div className='user_options'>

        <button id='btEdit'>Editar perfil</button>
        <button id='btCart'>Meu carrinho</button>
        <button id= 'logOut'>Sair</button>

    </div>

  )
}

export default UserLogged