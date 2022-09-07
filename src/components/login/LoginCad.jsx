import { Link } from "react-router-dom";

import React from 'react'


import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import google from './img/google.png'
import github from './img/github.png'

import "./login.sass"

const LoginCadastro = () => {
  return (
    <main id='containerPrimary'>
      <div id='container'>

        <div className='banner'>



        </div>



        <div className='box-login'>



          <div className='box'>
            <h2>Faça o seu login agora</h2>
            <input type="text" name='nome' id='nome' placeholder='Nome' />
            <input type='password' name='password' id='Senha' placeholder='Senha' />

            <button className='button'>Login</button>




            <Link to={"/cadastro"}>
              <p>Criar conta</p>
            </Link>




            <div className='social' >

              <img id='img-icon' src={facebook} alt="face" />
              <img id='img-icon' src={twitter} alt="face" />
              <img id='img-icon' src={google} alt="face" />
              <img id='img-icon' src={github} alt="face" />


            </div>


          </div>

        </div>








      </div>
    </main>


  )
}

export default LoginCadastro