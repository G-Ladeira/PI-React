import React from 'react';
import Demo from './carrosel/carrousel.jsx'
import Header from "../../components/head/Header"
import Itemss from './Items/Itemss.jsx';
import Footer from '../../components/footer/Footer'




export const Home = () => {
    return (
        <>
        <aside>
            <Header/>
            <Demo/>
            <Itemss/>
            <Footer/>
            
           

        
        </aside>
        </>
    )

}