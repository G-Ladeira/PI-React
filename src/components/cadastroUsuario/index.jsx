import { SettingsSuggestRounded } from '@mui/icons-material'
import React,{useState} from 'react'
import "./cadastro.sass"

const CadastroUsuario = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [erro, setErro] = useState("")
    const [sucesso, setSucesso] = useState("")
    const [loading, setLoading] = useState(false)
    
  return (
    
    <div className="cadastro">
      <div className="cadastro__container">
        <div className="cadastro__container__titulo">
          <h1>Cadastro</h1>
        </div>
        <div className="cadastro__container__form">
          <form>
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
            <div className="cadastro__container__form__botao">
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default CadastroUsuario