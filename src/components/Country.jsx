import { useState } from 'react';
import '../components/Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFLag}) => {
    const [visited, setVisited] = useState(false)
    // console.log(country)
    // console.log(handleVisitedCountries)

    const handleVisited = () => {
        // basic system
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // second system
        // setVisited(visited ? false : true)

        // third system
        setVisited(!visited)
        // alert(visited)
        handleVisitedCountries(country)

    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt="" />
            <h4>Country name : {country.name.common} </h4>
            <h5>Capital: {country.capital.capital}</h5>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big country" : "small country"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => handleVisitedFLag(country.flags.flags.png)}>Add visited flag</button>
        </div>
    );
};

export default Country;