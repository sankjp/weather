import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Table from './component/Table';
import { useState } from 'react';

function App() {
  const [weatherDetails, setWeatherDetails]= useState({})
  const [city, setCity]= useState('')
  const [error, setError]=useState(null)
  function apiCall(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=989aeb61637efc432e57044c6c5bd577`,{method:'GET'}).then(response=>{
    if(!response.ok){
      throw Error('No Data found')
    }  
    return response.json()})
    .then(res=>setWeatherDetails(res))
    .catch(err=>{setError(err.message)})
  }
  return (
    <div className="App">
      <input type="text" placeholder="City Name" onChange={e=>setCity(e.target.value)}></input>
      <Button type="primary" label="Submit" onClick={apiCall}></Button>
      {error && <div>{error}</div>}
      <Table weatherProps={weatherDetails}/>
      
    </div>
  );
}

export default App;
