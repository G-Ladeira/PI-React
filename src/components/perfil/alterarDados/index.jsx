import React from 'react'


import "./style.sass";

const AlterCadastro = () => {
  
  return (

    < div className = "userDataSection" >







    <div className='userDataBox'>
      <h1 id='dataTitle'>Alterar dados</h1>

      <div className='dataForm'>
        <label htmlFor='Nome' className='labelForm'>Nome Completo</label>
        <input type="text" name='Nome' id='altCad' placeholder='Nome' />

        <label htmlFor='email' className='labelForm'>E-mail</label>
        <input type="email" name='email' id='altEmail' placeholder='E-mail' />

        <label htmlFor='telefone' className='labelForm'>Telefone</label>
        <input type="tel" name="telefone" id='altTel' placeholder='Telefone' />

        <label htmlFor='Senha' className='labelForm'>Senha</label>
        <input type="text" name="Senha" id='altSenha' placeholder='Senha' />



        <button id='buttonAtt'> Salvar os Dados </button>


      </div>






    </div>

    </div >
  )
}

export default AlterCadastro









