import '../../styles/global/main.sass'
import './style.sass'
import Display from "../../components/product/img_section"
import Info from "../../components/product/info_section"
import Description from "../../components/product/dscp_section"
import Header from '../../components/header'
import Footer from '../../components/footer'

export const Product = () => {
    return (
        <>
            <Header/>
            <section className="product-section">

                <Display/>
                
                <Info/>
                
            </section>

            <section className="product-description">

                <Description/>
                
            </section>
            <Footer/>

        </>
    )
}