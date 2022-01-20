import React from 'react';
import { Link } from 'react-router-dom';
import { countries } from 'countries.json';

/*
const CountriesList = (props) => {
  const countryName = countries.find((el) => {
    return el.name === props.match.params.name;
  });
  return (
    <div>
      <h1>{countryName.name}</h1>
    </div>
  );
};
*/

///*
class CountriesList extends Component {
  state = {
    countryName: countries.slice(), // copy
  };
}
//*/

export default CountriesList;

//CountriesList: Displays the list of links with the country names.
