import { fetchDeezerData } from "./api";

export const buscarArtistasPorGenero = async (genreId) => {
  return await fetchDeezerData(`/genre/${genreId}/artists`);
};