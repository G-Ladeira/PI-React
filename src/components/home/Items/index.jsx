import React from 'react'
import { useState , useEffect} from 'react';
import ItemsHome from './item';






const url = "https://api.github.com/users/Veloso-dev/followers"



const ListHome = () => {

    const [ repositories , setRepositories] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setRepositories(data))
        
    },[]);
    console.log(repositories)

    
    
    

    return (
        <section className='repository-list'>

            

            <section>
                
                {repositories.map((repository,index) => { 
                    if (index <= 3 ){ 
                        const item = <ItemsHome  key={index} repository={repository}/>
                        
                        return   item}
                        
                    
                    
                    
                    
                    
                    
                   
                })}
                
               



            </section>

        </section>
    )
}

export default ListHome