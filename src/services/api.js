const API_URL = 'https://developers.deezer.com/api';

export const fetchDeezerData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
};