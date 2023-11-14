import { useGetCharacterByName, ResponseItem } from "./useGetCharacterByName";

export const useGetRaceByCharacter = (name: string) => {
  const { data, isLoading, isError } = useGetCharacterByName(name);

  if (isLoading) {
    // Return a loading state or value
    return 'Loading...';
  }

  if (isError || !data) {
    // Handle error state or return default value
    return 'Error fetching data';
  }

  // Assuming data is an array of ResponseItem, checking if it's not empty
  if (data.length > 0 && data[1].appearance) {
    return data[1].appearance.race;
  }

  // If no appearance or no data, handle accordingly
  return 'No Race data available';
};
