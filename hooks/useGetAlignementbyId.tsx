import { useGetCharacterById, ResponseItem } from "./useGetCharacterById";

export const useGetAlignementByName = (id: number) => {
  const { data, isLoading, isError } = useGetCharacterById(id);

  if (isLoading) {
    // Return a loading state or value
    return 'Loading...';
  }

  if (isError || !data  || !data[0]) {
    // Handle error state or return default value
    return 'Error fetching data';
  }

  if (data.length > 0 && data[1].biography) {
    return data[1].biography.alignment || 'alignment data not available';
  }

  // If no valid data or alignment information found
  return 'No aalignment data available';
};
