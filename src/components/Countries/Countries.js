import React from 'react';
import './Countries.css';

export default function Countries({ name, iso2, local_name }) {
  const countryCode = iso2.toLowerCase();
  console.log('local_name', local_name);

  return (
    <div className="countries">
      <h3>{name}</h3>
      <h4>{local_name}</h4>
      <img
        src={`https://flagcdn.com/224x168/${countryCode}.png`}
        width="224"
        height="168"
        alt={`"${name}"`}
      />
    </div>
  );
}
