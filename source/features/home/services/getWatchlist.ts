// useApi.js
import {useQuery} from 'react-query';

const fetchWatchlistData = async (adjusted: boolean, date: string) => {
  const response = await fetch(
    `http://localhost:3000/api/endpoint1/watchlist?date=${date}&adjusted=${adjusted}`,
  );
  if (!response.ok) {
    throw new Error('Error al obtener los datos de la watchlist');
  }

  return response.json();
};

export const useWatchlistData = (adjusted: boolean, date: string) => {
  return useQuery(['watchlist', adjusted, date], () =>
    fetchWatchlistData(adjusted, date),
  );
};
