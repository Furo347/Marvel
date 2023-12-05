import { useGetCharacterByName, ResponseItem } from "./useGetCharacterByName";

export const useGetStatByName = (name: string) => {
  const { data, isLoading, isError } = useGetCharacterByName(name);

  if (isLoading) {
    // Return a loading state or value
    return 'Loading...';
  }

  if (isError || !data  || !data[0]) {
    // Handle error state or return default value
    return 'Error fetching data';
  }

  if (data.length > 0 && data[1].biography) {
    return data[1].biography.alignment || 'Alignment data not available';
  }

  // If no valid data or alignment information found
  return 'No alignment data available';
};
