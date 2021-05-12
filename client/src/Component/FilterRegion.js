import React, { useState, useEffect } from 'react';
// import '../App.css';

const FilterRegion = () => {
    const [region, setRegion] = useState([])
    const [input, setInput] = useState({ name:''})
    const [output, setOutput] = useState([])

    const getRegion=async() => {
      const res=await  fetch('https://restcountries.eu/rest/v2/all')
           const region=await res.json()
            await setRegion(region);
    }
    useEffect(() => {
        getRegion()
    },[])
    


    useEffect(() => {
        setOutput([])
       region.filter(val => {
            if (val.region.includes(input)) {
                setOutput(output => [...output, val])
            }
        })

    }, [input]);
    console.log('region=>', input);

    return (
        <section className='filter'>
           
               <div>
                    <select name='name'onChange={e => setInput(e.target.value)} id='select'  className='select'>
                      <option value='Africa' >Africa </option>
                      <option value='Asia' >Asia</option>
                   <option value='America' >America</option>
                      <option value='Europe' >Europe</option>
                      <option value='Oceania'> Oceania</option>
                  </select>
                 </div>
                    
        
      
     <div>
      {output.map((res, index) => (
         
              <div className='gridd ' key={index}>
                  <div className="image">
                      <img src={res.flag} alt="flag" />
                  </div>
                  <div className='country-detail'>
                      <h2>{res.name} </h2>
                      <p>region:{res.region}</p>
                      <p>capital:{res.capital}</p>
                  </div>
              </div>
        
      ))}
 
 </div>
 </section>
    );
}

export default FilterRegion;
























