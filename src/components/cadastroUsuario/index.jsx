import { Api, SettingsSuggestRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import "./cadastro.sass"
import api from "../../services/index"



const CadastroUsuario = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [telefone, setTelefone] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [erro, setErro] = useState("")
  const [sucesso, setSucesso] = useState("")
  const [loading, setLoading] = useState(false)

  function cadastrousuario() {
    console.log(nome, email, senha)

    api.post("/users/cadastro", { nome, email, senha, telefone: "123456789" })
  }
  return (

    <div className="cadastroC">
      <div className="cadastro__container">
        <div className="cadastro__container__titulo">
          <h1>Cadastro</h1>
        </div>

        <div className="cadastroForm">
          <div className="cadastroInput">
            <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <input type="telefone" placeholder='Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="cadastroInput cadastroSesenha">
            <input type="password" placeholder='Confirmar Senha' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
          </div>
          

          <div className="cadastro__container__form__botao">
            <button className='botaoCadastro' onClick={cadastrousuario}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default CadastroUsuario