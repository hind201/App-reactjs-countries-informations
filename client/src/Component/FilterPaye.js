
import React, {useState,useEffect} from 'react';


function FilterPaye() {
 
    const [value, setValue] = useState([])
     const [search, setSearch] = useState('')

   



    const getPayes = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/all${value}`);
        const paye = await response.json()
        // await setValue(paye)
        setValue(paye)
       
    }
    useEffect(()=>{
        getPayes()
    },[])
    

const fillePaye=value.filter(paye=>{
    return paye.name.toLowerCase().includes(search.toLowerCase())
})
    
    return (
    
        <div className='filter'>
            <div >
                <form class="form-control">
                    <input onChange={e => setSearch(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    
                </form>
            </div>
           
             
                <div>
               {fillePaye.map((value, index) => (
                   
                        <div className='gridd ' key={index}>
                            <div className="image">
                                <img src={value.flag} alt="flag" />
                            </div>
                            <div className='country-detail'>
                                <h2>{value.name} </h2>
                                <p>region:{value.alpha2Code}</p>
                                <p>capital:{value.capital}</p>
                            </div>
                        </div>
                  
                ))}
           
           </div>
                    
              
           

           </div>  
    );
   
}

export default FilterPaye












// import React from 'react';
// import ReactDom from 'react-dom';
// import axios from 'axios'

// function FilterPaye() {

//     const [searchTerm, setSearchTerm] = React.useState("");
//     const [searchResults, setSearchResults] = React.useState([]);
//     const handleChange = e => {
//       setSearchTerm(e.target.value);
//     };
//     ;
//     const getPaye=async() => {
//         const res=await  fetch('https://restcountries.eu/rest/v2/all')
//              const paye=await res.json()
//               await setSearchTerm(paye);
//       }
//      React.useEffect(() => {
//         getPaye()
//       },[])
//     React.useEffect(()=>{
//         const result=searchTerm.filter(value=>
//             value.toLowerCase().includes(searchTerm)
//             );
//             setSearchResults(result)
//     },[searchTerm])
      
    
       

//     return (
//         <div className='filter'>
                
//                  <form class="form-control">
//                        <input   value={searchTerm}onChange={handleChange} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  
//                    </form>
//             </div>
//     )
// }

// export default FilterPaye




