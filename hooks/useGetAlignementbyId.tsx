import { useGetCharacterById } from './useGetCharacterById';

export const useGetAlignmentById = (id: number) => {
  const { data, isLoading, isError } = useGetCharacterById(id);

  if (isLoading) {
    return 'Loading...';
  }

  if (isError || !data || !data[0]) {
    return 'Error fetching data';
  }

  // Assuming data[0] contains the character information
  const alignment = data[0]?.biography?.alignment;

  if (alignment) {
    return alignment;
  } else {
    return 'Alignment data not available';
  }
};
