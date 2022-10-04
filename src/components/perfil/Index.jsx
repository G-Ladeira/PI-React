import React from 'react'
import AlterCadastro from './alterarDados'
import VerPedidos from './pedidos'
import './style.sass'
import Header from '../header';
import Footer from '../footer';
import NestedList from './NestedList';
import Userdata from './dadosUsuarios';
import Endereco from './enderecos';

function UserView() {
  return (
    <>
      <Header />
      <div className='user_view'>
        

        <div className="dataSection">
          <NestedList/>
            <Userdata/>
            <AlterCadastro />
            <Endereco/>
        </div>
        <div className="orderSection">
          <VerPedidos />
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default UserView