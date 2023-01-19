import React from 'react';
import './Countries.css';

export default function Countries({ name, iso2 }) {
  const countryCode = iso2.toLowerCase();

  return (
    <div className="countries">
      <h3>{name}</h3>
      <img
        src={`https://flagcdn.com/224x168/${countryCode}.png`}
        width="224"
        height="168"
        alt="South Africa"
      />
    </div>
  );
}

// export default function CountryCard(country) {
//   const fixCase = country.iso2.toLowerCase();
//   return (
//     <div className="country-card">
//       <h2>{country.name}</h2>
//       <h4>{country.local_name}</h4>
//       <img src={`https://flagcdn.com/w320/${fixCase}.png`} />
//     </div>
//   );
// }
