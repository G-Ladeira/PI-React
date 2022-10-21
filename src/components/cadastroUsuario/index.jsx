import { Api, SettingsSuggestRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import "./cadastro.sass"
import facebook from '../../components/login/img/facebook.png'
import google from '../../components/login/img/google.png'
import github from '../../components/login/img/github.png'
import twitter from '../../components/login/img/twitter.png'
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

        <div className="cadastro__container__form">
          <div className="cadastro__container__form__nome">
            <label>Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="cadastro__container__form__email">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="cadastro__container__form__senha">
            <label>Senha</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="cadastro__container__form__confirmarSenha">
            <label>Confirmar Senha</label>
            <input type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
          </div>
          <div className="Social">
          <img id='img-icon' src={facebook} alt="face" />
              <img id='img-icon' src={twitter} alt="face" />
              <img id='img-icon' src={google} alt="face" />
              <img id='img-icon' src={github} alt="face" />
          </div>


          <div className="cadastro__container__form__botao">
            <button onClick={cadastrousuario}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default CadastroUsuario