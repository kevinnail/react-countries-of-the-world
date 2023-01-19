// import React, { useState } from 'react';
import './Main.css';
import useCountries from '../../../hooks/useCountries.js';
import Countries from '../../Countries/Countries.js';

export default function Main() {
  const { countries, error } = useCountries();

  return (
    <div className="main">
      {countries.map((country) => (
        <Countries key={country.id} {...country} />
      ))}
    </div>
  );
}
