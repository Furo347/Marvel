//useGetCharacterByName.tsx
import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";
import { PowerStats } from "../component/characterdetails";
export type Item = {
  id: number,
  name: string,
  powerstats?: PowerStats,
  biography?: {
    "full-name"?: string,
    "alter-egos"?: string,
    aliases?: string[],
    "place-of-birth"?: string,
    "first-appearance"?: string,
    publisher?: string,
    alignment?: string
  },
  appearance?: {
    gender?: string,
    race?: string,
    height?: [string, string],
    weight?: [string, string],
    "eye-color"?: string,
    "hair-color"?: string
  },
  work?: {
    occupation?: string,
    base?: string
  },
  connections?: {
    "group-affiliation"?: string,
    relatives?: string
  },
  image?: {
    url?: string
  }
}

export type ResponseItem = Item[];
export const useGetCharacterById = (id: number) => {
  return useQuery<ResponseItem>({
    queryKey: ['id', id],
    queryFn: () => ApiClient.getCharacterById(id),
  });
};

