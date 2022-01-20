import React from 'react';
import { Link } from 'react-router-dom';
import countries from "../countries.json";



export const CountriesList = () => {
  return (
    <div>
      <h2>All countries</h2>
      {countries.map((eachCountry, index) => {
        return (
          <div key={eachCountry.id}>
            <h3>
              <Link to={`/country/${eachCountry.name.common}`}>{eachCountry.name.common}</Link>
            </h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};


