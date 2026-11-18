import '../components/Country.css'

const Country = ({country}) => {
    console.log(country)

    const handleVisited = () => {
alert("Click")
    }
    return (
        <div className="country">
            <img src={country.flags.flags.png} alt="" />
            <h4>Country name : {country.name.common} </h4>
            <h5>Capital: {country.capital.capital}</h5>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ?"Big country":"small country"}</p>
            <button onClick={handleVisited}>Not visited</button>
        </div>
    );
};

export default Country;