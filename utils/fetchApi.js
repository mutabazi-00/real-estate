import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'cefcf15aa6mshb3f12285cb32e02p1baab8jsn69dae370c41b',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
    
  return data;
} 