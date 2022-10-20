import React from 'react'
import './style.sass'
import { useState } from 'react';

function Userdata(props) {
    
    return (
        <div>
            <h1 id='myDataTitle'> Meus dados</h1>
            <div className='dataDiv'>

                <h3 className='label'>Nome</h3>
                <p>Gabriel Ladeira Gomes Soares</p>
                <h3 className='label'>E-mail</h3>
                <p>gabriel@emai.com</p>

                <h3 className='label'>Telefone</h3>
                <p>12345678</p>
                <div className='divBtn'>
                    <button onClick={()=> props.setActive('atualizar')} className='editdata'>Editar dados</button>
                </div>

            </div>
        </div>
    )
}

export default Userdata