import '../../styles/global/main.sass'
import '../checkout/style.sass'
export const checkout = () => {
    return (
        <>
            <h1>Checkout</h1>

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
                        <button id='btn'>Ir ao Pagamento</button>
                        <button id='btn'>Continuar Comprando</button>
                    </div>
                </div>
            </section>
            <section className="payment-option1 flex">
                <div className="payment-option2 flex">
                    <h3>Checkout</h3>
                    <div className="flex column">
                        <button id='btn'>Pix</button>
                        <button id='btn'>Cartões</button>
                        <button id='btn'>Boleto</button>
                    </div>
                </div>
                <div className="information">
                    <h2>Pix</h2>
                    <p>A melhor opção para compas à vista.</p>
                    <p> Pague com PIX e aproveite até 15% OFF. Nessa modalidade, seu pedido
                        é aprovado instantaneamente, o que torna a expedição do seu pedido
                        ainda mais rápida.
                    </p>
                </div>
            </section>
        </>
    )

}