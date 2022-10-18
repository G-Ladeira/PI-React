import React from 'react'
import "./cadastro.sass"

const UserForm = props => {
  const [user, setUser] = useState(props.user)

  const submit = e => {
    e.preventDefault()
    fetch('/cadastro', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setUser(json.user))
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="user[name]"
        value={user.name}
        onChange={e => setUser({ ...user, name: e.target.value })}
      />
      {user.errors.name && <p>{user.errors.name}</p>}
      <input
        type="password"
        name="password[password]"
        value={user.name}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      {user.errors.name && <p>{user.errors.name}</p>}

      <input
        type="email"
        name="user[email]"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />
      {user.errors.name && <p>{user.errors.name}</p>}

      <input type="submit" name="Sign Up" />
    </form>
  )
}


////////////////////////////////////////////////////////////////
const CadastroUsuario = () => {
  return (
    <main className='cadastroC'>
    <div id='continer2'>

      <div className='boxLogin'>
          <h1 id='textCriar'>Criar Seu Cadastro</h1>

          <form action='/cadastro' method='POST' className='boxAccount'>

            <input type="text" name='Nome' id='nomeCad' placeholder='Nome'/>
            <input type="email" name='email' id='email' placeholder='E-mail'/>
            <input type="email" name='email' id='email' placeholder='Confirmar E-mail'/>
            <input type="password" name='password' id='passwordCad' placeholder='Senha'/>
            <input type="password" name='password' id='passwordCad' placeholder='Confirmar Senha'/>

            <button type='submit' id='buttonCriar'> Criar Conta</button>
          </form>

      </div>

    </div>


    </main>

  )
}

export default CadastroUsuario