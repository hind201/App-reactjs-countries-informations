//  import React from 'react'
import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './Paye.css'




function Paye() {
    const [paye,setPaye]= useState([])
    const {name}=useParams()
    const fetchPayeData =async () =>{
        
        const response = await fetch(` https://restcountries.eu/rest/v2/name/${name}`);
        const paye = await response.json()
        setPaye(paye)
        console.log(paye)
    }
    useEffect(() => {
        fetchPayeData() 
    }, [])
    return (
        <>
       <button className='btnn'><Link to="/" className="btn ">
          
          Back Home
            </Link> </button>
           <h1>Les donnés des payes</h1> 
           <section className='paye'>
               {paye.map((dataPaye )=>{
const {numercCode,flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,callingCodes}=dataPaye 
            
             return(
        <article Key={numercCode}>
            <div className='paye-inner'>
                     <div className='flag'>
                         <img src={flag} alt={name}/>
                         </div>
                     <div className='paye-infos'>
                        
                     <h2>{name}</h2>
                         <h5>NativeName: <span>{nativeName}</span></h5>
                         <h5>Population: <span>{population}</span></h5> 
                         <h5>Region: <span>{region}</span></h5>
                          <h5>Subregion: <span>{subregion}</span></h5>
                           <h5>Capital: <span>{capital}</span></h5>
                            <div><h5>TopLevelDomain: <span>{topLevelDomain}</span></h5>
                            <h5>Currencies: <span>{currencies[0].name}</span></h5>
                            <h5>Language: <span>{languages[0].name}</span></h5>
                            {/* <h5>Border:<span>{borders}</span></h5> */}
                            <h5>CallingCodes: <span>{callingCodes}</span></h5>
                            
                     </div>
                   
                     
                        
                         </div>
                         </div>
                         <div>
                        
                         <h3>Border Contries: </h3>
                         <div className='borders'>
                         {borders.map((border)=>{
                             return(
                             <ul Key={border}>
                                 <li>{border}</li>
                             </ul>
                             )
                         })}
                         </div>
                         </div>
           
                        
                 </article>
             )
               })}
    </section>
         
        </>
    )  
} 


export default Paye
