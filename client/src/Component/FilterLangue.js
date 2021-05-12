import React, { useState, useEffect } from 'react';
// import '../App.css';

const FilterLangue = () => {
    const [languages, setLangues] = useState([])
    const [value, setValue] = useState({ language:''}) //input

    const [output, setOutput] = useState([])

    const getLangue=async() => {
      const res=await  fetch('https://restcountries.eu/rest/v2/all')
           const paye=await res.json()
            await setLangues(paye);
    }
    useEffect(() => {
        getLangue()
    },[])
    


    useEffect(() => {
        setOutput([])
        languages.filter(val => {
            if (val.languages[0].name.includes(value)) {
                setOutput(output => [...output, val])
            }
        })

    }, [value]);
    console.log('langues=>', value);

    return (
        <section className='filter'>
           
               <div>
                    <select name='language'onChange={e => setValue(e.target.value)} id='select'  className='select'>
                      <option value='Arabic' >Arabic </option>
                      <option value='French' >French</option>
                   <option value='Norwegian' >Norwegian</option>
                      <option value='English' >English</option>
                      <option value='German'> German</option>
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
                      <p>region:{res.alpha2Code}</p>
                      <p>capital:{res.capital}</p>
                  </div>
              </div>
        
      ))}
 
 </div>
 </section>
    );
}

export default FilterLangue;
























     
        
// import React, { useState, useEffect } from 'react';
// // import '../App.css';

// const FilterLangue = () => {
//     const [langue, setLangue] = useState([])
//     const [input, setInput] = useState({ name:''})
//     const [output, setOutput] = useState([])

//     const getLanguage=async() => {
//       const res=await  fetch('https://restcountries.eu/rest/v2/all')
//            const language=await res.json()
//             await setLangue(language);
//     }
//     useEffect(() => {
//         getLanguage()
//     },[])
    


//     useEffect(() => {
//         setOutput([])
//         langue.filter(val => {
//             if (val.langue.includes(input)) {
//                 setOutput(output => [...output, val])
//             }
//         })

//     }, [input]);
//     console.log('language=>', input);

//     return (
//         <section className='filter'>
           
//                <div>
//                <select name='name'onChange={e => setInput(e.target.value)} id='select'  className='select'>
//                       <option value='arabic'>Arabic</option>
//                       <option value='french'>French</option>
//                    <option value='english' >English</option>
//                       {/* <option value='Europe' >Europe</option>
//                       <option value='Oceania'> Oceania</option> */}
//                   </select>
//                  </div>
                    
        
      
//      <div>
//       {output.map((res, index) => (
         
//               <div className='gridd ' key={index}>
//                   <div className="image">
//                       <img src={res.flag} alt="flag" />
//                   </div>
//                   <div className='country-detail'>
//                       <h2>{res.name} </h2>
//                       <p>language:{res.language}</p>
//                       <p>capital:{res.capital}</p>
//                   </div>
//               </div>
        
//       ))}
 
//  </div>
//  </section>
//     );
// }

// export default FilterLangue;
























