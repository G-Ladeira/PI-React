import React from 'react'

import "./styled.sass"

const SearchHome = () => {
  return (
    <main>
        <form>
                <input type="text" name="busca" placeholder="Digite a sua busca"/>
                <button>Buscar</button>
            </form>

    </main>
  )
}

export default SearchHome