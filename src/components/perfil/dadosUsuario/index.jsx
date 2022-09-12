import React from 'react'

import "./style.sass";

const AlterCadastro = () => {
  return (

    <div className="userDataSection">
      






      <div className='userDataBox'>
          <h1 id='dataTitle'>Seus dados</h1>

          <div className='dataForm'>
            <label htmlFor='Nome' className='labelForm'>Nome Completo</label>
            <input type="text" name='Nome' id='altCad' placeholder='Nome'/>

            <label htmlFor='email' className='labelForm'>E-mail</label>
            <input type="email" name='email' id='altEmail' placeholder='E-mail'/>

            <label htmlFor='telefone' className='labelForm'>Telefone</label>
            <input type="tel" name= "telefone" id= 'altTel' placeholder='Telefone' />

            <label htmlFor='cpf' className='labelForm'>CPF</label>
            <input type="text" name= "cpf" id= 'altcpf' placeholder='CPF' />



            <button id='buttonAtt'> Salvar os Dados </button>


          </div>






      </div>

    </div>
  )
}

export default AlterCadastro









