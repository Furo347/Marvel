//useGetCharacterByName.tsx
import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";
export type Film={
    id: number,
    title: string,
    release_date: string,
    box_office: number,
    duration: number,
    overwiew?: string,
    cover_url: string,
    trailer_url?: string,
    directed_by: string,
    phase: number,
    saga: string,
    chronology: number,
    post_credit_scenes: number,
    imdb_id: string,
}

export type ResponseItem = Film[];

export const useGetFilmByName = () => {
  return useQuery<ResponseItem>({
    queryKey: [],
    queryFn: () => ApiClient.getFilmrByName(),
  });
};