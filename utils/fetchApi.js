import axios from 'axios';

const baseUrl = 'bayut.p.rapidapi.com'

// headers: {
// 'X-RapidAPI-Key': 'cefcf15aa6mshb3f12285cb32e02p1baab8jsn69dae370c41b',
// 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }
 
export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'cefcf15aa6mshb3f12285cb32e02p1baab8jsn69dae370c41b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    }
    )
}