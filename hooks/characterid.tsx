import { useEffect, useState } from "react";

const [comics, setComics] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8c6e8b0d783ac6d53839a57854c756de&hash=bb9623e9ff8a524642d424386f899ab8');
      const data = await response.json();
      setComics(data.data.results); // Assuming 'data' contains the provided JSON structure
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);