import React, { useEffect, useState } from 'react'
import Card from './Card'
//import logo from '../logo.svg';
//import axios from "axios";
import 
{setFunction}  from './Icons';


function Main() {
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Bengaluru");
    const[icon,setIcon]=useState("");

    useEffect(() => {
    async function getData(){
        let api =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=acade179fbed7d0e1cc7b11447fd50c6`;
        try {
            //let response = await axios.get(api);
            let response =await fetch(api);
            let data =await response.json();
            console.log(data);
           setCity(data);
           if(data?.name){
            setIcon(data.weather[0].icon)
           }
            //return setCity(response.data)
        } catch (error) {
            console.log(error.response.data.message);
         } }
    getData()
    },[search]);
    console.log(city);
    
  return (
    <div>
        <div>
          <header>
            <h1 className='hdd'>
              WELCOME TO WEATHER APP
            </h1>
          </header>
        <input className='search' type="search" placeholder="Search city"
        onChange={(e) => setSearch(e.target.value)}/>
        </div>
       {
        city?.name ?
        (<Card search={search} city={city} url={setFunction(icon)}/> )
        : <div><h3>City Not Found</h3></div>
       }
        
    </div>

  );
}

export default Main