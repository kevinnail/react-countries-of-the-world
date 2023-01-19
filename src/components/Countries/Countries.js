import React from 'react';
import './Countries.css';

export default function Countries({ name }) {
  return (
    <div className="countries">
      <h3>{name}</h3>
      <img
        src="https://flagcdn.com/72x54/bq.png"
        width="72"
        height="54"
        alt="Bonaire, Sint Eustatius and Saba"
      />
    </div>
  );
}
