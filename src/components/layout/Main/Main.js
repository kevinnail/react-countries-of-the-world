import React from 'react';
import './Main.css';
// import { useCountries } from '../../../hooks/useCountries.js';
import useCountries from '../../../hooks/useCountries.js';
import Countries from '../../Countries/Countries.js';

export default function Main() {
  const { countries } = useCountries();
  // console.log('countries', countries);

  return (
    <div className="main">
      {countries.map((country) => (
        <Countries key={country.id} {...country} />
      ))}
    </div>
  );
}
