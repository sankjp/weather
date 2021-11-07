import React from "react";
import './index.css';

const Table=({weatherProps})=>{
    console.log(weatherProps)
    return(
      <div className="tbl">
      <table>
          <tr><th>CITY:{weatherProps?.name}</th></tr>
          <tr><th>TEMPERATURE:{weatherProps?.main?.temp}</th></tr>
          <tr><th>MAXIMUM TEMPERATURE:{weatherProps?.main?.temp_max}</th></tr>
          <tr><th>MINIMUM TEMPERATURE:{weatherProps?.main?.temp_min}</th></tr>
          <tr><th>HUMIDITY:{weatherProps?.main?.humidity}</th></tr>
      </table>
      </div>
    )
}

export default Table;