import React from 'react'

function Card({city,search,url}) {
  return (
    <main className='card'>
    {/*<h1 className='hd'>WELCOME TO WEATHER APP</h1>*/}
    <div className='card-body'>
    <header>
    

        
        <h1>{search}</h1>
        </header>
        <div className='sub-block'>
        <div>
    <img src={url} alt="" width={175} height={175}></img>
    </div>
        {/* For Temperature */}
        <div>
           {/* <h2>
                28<sup>o</sup>C </h2>*/}
            <h2> {city?.main.temp +'\xB0'} C</h2>
            <p>(Feels like {city?.main?.feels_like +'\xB0'}C)</p>
            <h3>{city?.weather[0].main}</h3>
            <div className="sub">
                <span>Max Temp:  {city?.main?.temp_max +'\xB0'}C </span>
                <span>Min Temp:  {city?.main?.temp_min +'\xB0'}C </span>
            </div>
            <p>Humidity: 70</p>
    </div>
    </div>
    </div>
    </main>
  )
}

export default Card