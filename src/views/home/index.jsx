import React from 'react';
import Demo from './carrosel/carrousel.jsx'
import Header from "../../components/head/Header"
import Itemss from './Items/Itemss.jsx';
import Footer from '../../components/footer/Footer'
import Index from '../../components/grid/Index.jsx';




export const Home = () => {
    return (
        <>
        <aside>
            <Header/>
            <Demo/>
            <Itemss/>
            <Index />
            <Footer/>
            
           

        
        </aside>
        </>
    )

}