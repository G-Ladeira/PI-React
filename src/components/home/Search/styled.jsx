import React from 'react'

import "./styled.sass"

const SearchHome = () => {
  return (
    <main className='mainSearch'>
        <form className='formSearch'>
                <input className='inputSearch' type="text" name="busca" placeholder="Digite a sua busca"/>
                <button className='buttonSearch' >Buscar</button>
            </form>

    </main>
  )
}

export default SearchHome