// import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Header() {
  

   
      // State to manage the value of the input
    //   const [value, setValue] = useState([])
    
      // Method to set the value of the input
      // const handleChangeValue = value => {
      //   setvalue(value);
      //   searchCountries(value);
      // };
      // Method to hide or show countries by his name
  // const searchCountries = value => {
  //   const payeyName = document.querySelectorAll('.paye-name');
  //   payeyName.forEach(name => {
  //     if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
  //       name.parentElement.parentElement.style.display = 'block';
  //     } else {
  //       name.parentElement.parentElement.style.display = 'none';
  //     }
  //   });
  // };
    
//   const searchCountry = async term => {
//     // if(term.length < 3 || term === '') return
//     const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`)
//     const data = await res.json()
//     await console.log(data)
//     await setValue(data)

// }
// useEffect(()=>{
//   searchCountry()
// },[])


    return (
        <>
        <header className='header'>
            <div>
                <h1>Where in the world?</h1>
                </div> 
           
                <div>
                <button className='button'><Link to={`/filterLangue`}>Filter By Langue</Link> </button>
                </div>
                <div>
                <button className='button'><Link to={`/filterRegion`}>Filter By Region</Link> </button>
                </div>
                <div>
                <button className='button'><Link to={`/filterPaye`}>Filter By Name</Link> </button>
                </div>
        </header> 
     
           
         {/* <section className='filter'>
             <div>
         <from className='form-control'>
                <input type="text" 
                onChange={term => searchCountry(term.target.value)}
                 name='search' id='search'
                
                placeholder="search for a country"/>
            </from>
            </div>
          
    {value.map((paye)=>{
    const {numericCode,name,flag} = paye
    return <article key={numericCode}>
     <div>
         <img src={flag} alt={name}/>
    
     </div>

 
    
    
    
    </article>
    
   
   })}
            
   


       
           

         </section>
         */}
        </>
      
        
      )  
 
}

export default Header
