import './Countries.css'
import { use, useState } from 'react';
import Country from '../Country';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        console.log("handle visited click", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFLag = (flag) => {
        console.log("falg need", flag)
        const neweVisitedFlag = [...visitedFlags, flag]
        setVisitedFlags(neweVisitedFlag)
    }

    const countries = use(countriesPromise)
    // console.log(countries.length)
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <h2>Total countries visited: {visitedCountries.length}</h2>
            <h2>Total Visited Flags: {visitedFlags.length}</h2>



            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3.ccn3} >{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flag-contaiern'>

                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFLag={handleVisitedFLag}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;