import React,{useState} from 'react'
import axios from 'axios'

function FilterPaye() {
    const [value, setValue] = useState('')
    const [output, setOutput] = useState('')

    const onsubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${value}`)
        setOutput(res.data[0])


    }

    
    return (
        <div className='filter'>
            <div >
                <form class="form-control">
                    <input onChange={e => setValue(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn" type="submit" onClick={onsubmit}>Search</button>
                </form>
            </div>
            {output && (
                <>
                    <div >
                        <div className="image">
                            <img src={output.flag} alt="flag" />
                        </div>
                        <div className='paye-infos'>
                            <p>{output.callingCodes} </p>
                            <p>{output.name} </p>

                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

export default FilterPaye
