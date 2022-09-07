import React from 'react'
import { ImUser } from "react-icons/im";

const AlterCadastro = () => {
  return (

    <div className="userDataSection">
      <div className='user_optns'>
        <div className="user_data">
          <ImUser />

          <h3 className='optn_name'>Cadastro</h3>
          <span>Altere seus dados cadastrais.</span>
        </div>


      </div>






      <div className='userDataBox'>
          <h1 id='dataTitle'>Seus dados</h1>

          <div className='dataForm'>

            <input type="text" name='Nome' id='nomeCad' placeholder='Nome'/>
            <input type="email" name='email' id='email' placeholder='E-mail'/>
            <input type="password" name='password' id='passwordCad' placeholder='Senha'/>
            <input type="tel" name= "telefone" id= 'telefoneCad' placeholder='Telefone' />




            <button id='buttonCriar'> Atualizar</button>


          </div>






      </div>

    </div>
  )
}

export default AlterCadastro









