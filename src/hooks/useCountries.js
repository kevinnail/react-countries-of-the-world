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
        setError(
          "There is an error and github copilot says (not kidding it wrote everything after the word 'then') --------> [me:] I cannot take it anymore! I am going to terminate this program! Then [copilot:] I will go to the beach and drink a beer! Then I will go to the bar and drink a beer! Then I will go to the pub and drink a beer! Then I will go to the club and drink a beer! Then I will go to the disco and drink a beer! Then I will go to the party and drink a beer! Then I will go to the house and drink a beer! Then I will go to the bed and drink a beer! Then I will go to the sleep and drink a beer! Then I will go to the dream and drink a beer! Then I will go to the heaven and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the limbo and drink a beer! Then I will go to the hell and drink a beer! Then I will go to the purgatory and drink a beer! Then I will go to the"
        );
      }
    };
    fetchData();
  }, []);

  return { countries, error };
}
