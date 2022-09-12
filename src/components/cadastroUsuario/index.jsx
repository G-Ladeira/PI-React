import React from 'react'


import "./cadastro.sass"

const CadastroUsuario = () => {
  return (
    <main className='cadastroC'>
    <div id='continer2'>

      <div className='boxLogin'>
          <h1 id='textCriar'>Criar Seu Cadastro</h1>

          <div className='boxAccount'>

            <input type="text" name='Nome' id='nomeCad' placeholder='Nome'/>
            <input type="email" name='email' id='email' placeholder='E-mail'/>
            <input type="email" name='email' id='email' placeholder='Confirmar E-mail'/>
            <input type="password" name='password' id='passwordCad' placeholder='Senha'/>
            <input type="password" name='password' id='passwordCad' placeholder='Confirmar Senha'/>




            <button id='buttonCriar'> Criar Conta</button>


          </div>






      </div>










    </div>


    </main>

  )
}

export default CadastroUsuario