import React from 'react';
import './Main.css';
import Countries from '../../Countries/Countries';
export default function Main() {
  return (
    <div className="main">
      <h1>Flags That Are Awesome Sauce</h1>

      <Countries />
    </div>
  );
}
