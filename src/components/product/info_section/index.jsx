import React from 'react'
import './style.sass'



const Info = () => {
  return (
    <div className="product-info">
                    <span className="prdt-colection">
                        Coleção do produto
                    </span>

                    <h1 className="product-name">Nome do produto</h1>

                    <h2 className="product-price">R$99.999,99</h2>

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
                </div>
  )
}

export default Info