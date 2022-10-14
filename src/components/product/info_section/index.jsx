import { React, useState, useEffect } from 'react'
import './style.sass'

const url = "https://mocki.io/v1/9234e80f-9572-4d0a-8d55-e7020e912a3a"





const Info = (props) => {

    const [repositories, setRepositories] = useState("")
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => setRepositories(data))

        }, );
    }, []);

    // try {

    let cardProduto = <>
        <span className="prdt-colection">{props.produto.colecao}</span>

        <h1 className="product-name">{props.produto.nome}</h1>

        <h2 className="product-price">RS{props.produto.preco}</h2>

        <form>
            <div className="size">
                <select name='tamanhos'>
                    <option value="" defaultChecked>Tamanho</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>

            <div className="quantity">
                <select name='quantidade'>
                    <option value="" defaultChecked>Quantidade</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <button className='btnAdd'>Adcionar à sacola</button>
        </form>
    </>

    let carregando = <h1 className="product-name">Carregando ...</h1>
    return (
        <div className="product-info">
            {repositories ? cardProduto : carregando}
        </div>
    )
}


export default Info