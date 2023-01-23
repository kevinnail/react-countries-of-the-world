import React, { useState } from 'react';
import './Main.css';
import useCountries from '../../../hooks/useCountries.js';
import Countries from '../../Countries/Countries.js';

export default function Main() {
  const { countries, error } = useCountries();

  const [continent, setContinent] = useState('all');

  const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter((country) => {
    return country.continent === continent || continent === 'all';
  });

  return (
    <div>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        {continents.map(
          (continent) =>
            continent && (
              <option key={continent} value={continent}>
                {continent}
              </option>
            )
        )}
      </select>
      <p className="error">{error}</p>
      <section className="main">
        {filtered.map((country) => (
          <Countries key={country.id} {...country} />
        ))}
      </section>
    </div>
  );
}
