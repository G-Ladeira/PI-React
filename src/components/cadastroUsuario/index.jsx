import { Api, SettingsSuggestRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import "./cadastro.sass"
import api from "../../services/index"



const CadastroUsuario = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
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
            <label>Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <label>Telefone</label>
            <input type="telefone" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <label>Senha</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="cadastroInput cadastroSesenha">
            <label>Confirmar Senha</label>
            <input type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
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