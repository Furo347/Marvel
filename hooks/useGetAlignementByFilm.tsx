import { useGetFilmByName } from "./useGetFilmByName";

export const useGetAlignementByName = () => {
  const { data, isLoading, isError } = useGetFilmByName();

  if (isLoading) {
    // Return a loading state or value
    return 'Loading...';
  }

  if (isError || !data  || !data[0]) {
    // Handle error state or return default value
    return 'Error fetching data';
  }
};
