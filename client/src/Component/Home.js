
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';



 function Home() {
     const [payes,setPayes] = useState([])

     const getPayes = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const paye = await response.json()
        await setPayes(paye)
       
    }
    useEffect(()=>{
        getPayes()
    },[])
    
   

    
    return (
        <>
       <section className='grid filter'>
  
        
   
  

            
{payes.map((paye)=>{
    const {numericCode,name,population,region,capital,flag} = paye
    return <article key={numericCode}>
     <div>
         <img src={flag} alt={name}/>
         <div className='info'>
         <h4 className='paye-name'>
             Nom: <span>{name}</span></h4>
         <h4>Population:<span>{population}</span></h4>
         <div className='paye-region'>
         <h4>Region:<span> {region}</span></h4>
         </div>
         <h4>Capital:<span>{capital}</span></h4>
         <Link to={`Paye/${name}`}>Encore plus</Link>
         </div>
     </div>

 
    
    
    
    </article>
    
   
   })}
</section>

       

       </>
            
       
    )
}
export default Home