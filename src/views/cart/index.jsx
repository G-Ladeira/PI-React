import '../../styles/global/main.sass'
import '../checkout/style.sass'
export const cart = () => {
    return (
        <>
            <h1>Carrinho</h1>

            <section className="summary-items flex">
                <div className="item production-list">
                    <table>
                        <thead>
                            <tr>
                                <td>Valor do produtos:</td>
                                <td>R$ xxx,xx</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brincos Wendy Taylor</td>
                                <td>R$ 300,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="item-resume">
                    <h2>Resumo</h2>

                    <table>
                        <thead>
                            <tr>
                                <td>Valor do produtos:</td>
                                <td>R$ xxx,xx</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Frete:</td>
                                <td>R$ xxx,xx</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>R$ xxx,xx</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex column summary-buttons">
                        <button id='btn'>Seguir ao Pagamento</button>
                        <button id='btn'>Continuar Comprando</button>
                    </div>
                </div>
            </section>
            <section className="payment-option1 flex">
                <div className="payment-option2 flex">
                    <h3>PRODUTO E FRETE</h3>
                    <div class="flex column">
                        <p>Produto + Frete = R$XXX,XX</p>
                    </div>
                </div>
                <div className="information">


                </div>
            </section>


        </>
    )
}