import React, { useEffect, useState } from 'react';
import api from './api'; // 

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await api.get('/shows/list'); // Utilisation de l'instance pour faire une requête GET
        setShows(response.data.shows); // Assurez-vous que cela correspond à la structure de la réponse
      } catch (err) {
        console.error('Error response:', err.response); // Affichez l'erreur pour le débogage
        setError(err.response ? err.response.data.error : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>{show.title}</li> 
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
