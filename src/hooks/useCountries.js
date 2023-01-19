import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setError('Something went wrong');
      }
    };
    fetchData();
  }, []);

  return { countries, error };
}
