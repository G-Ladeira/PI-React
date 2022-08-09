import '../../styles/global/main.sass'
import './style.sass'


export const Product = () => {
    return (
        <>
            <section className="product-section">
                <div className="product-images">
                    <div className="img-1">

                    </div>

                    <div className="img-2">

                    </div>

                    <div className="img-3">

                    </div>

                    <div className="img-4">

                    </div>


                </div>

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

                        <button>Adcionar à sacola</button>
                    </form>
                </div>
            </section>
           


            <section className="product-description">

                <h2>Descrição</h2>

                <div className='description-box'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem impedit minima esse aspernatur doloremque, deserunt accusantium nemo magni voluptas dicta natus alias cumque, ea minus fugiat blanditiis totam tempore voluptate soluta! Facere atque ab error! Minus, tempora similique iste ullam vel laboriosam dolor at error placeat eum eaque sapiente nam alias quaerat, sequi nostrum veritatis consectetur neque provident veniam odit atque cupiditate deleniti? Earum ducimus ea, adipisci neque quam architecto dicta officia. Id ipsa fugiat illum dolores cum explicabo modi velit, magni sapiente commodi, doloribus magnam iusto quod nulla maiores fuga dolore officiis earum minima accusamus. Quam illum ipsa autem, porro explicabo reiciendis enim aut inventore. Beatae quasi ad voluptatem suscipit magni, error sunt officia modi maxime, sapiente possimus optio labore fugiat corporis aperiam.</p>
                </div>

            </section>

        </>
    )
}