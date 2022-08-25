import '../../styles/global/main.sass'
import './style.sass'
import Display from "../../components/product/img_section"
import Info from "../../components/product/info_section"
import Description from "../../components/product/dscp_section"

export const Product = () => {
    return (
        <>
            <section className="product-section">

                <Display/>
                
                <Info/>
                
            </section>

            <section className="product-description">

                <Description/>
                
            </section>

        </>
    )
}