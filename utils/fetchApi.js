import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '441dc5d9d3msh76757acd1fcb0dcp1e7488jsn1e6b6b9edb78',
    },
  });
    
  return data;
}

// headers: {
//   'X-RapidAPI-Key': '441dc5d9d3msh76757acd1fcb0dcp1e7488jsn1e6b6b9edb78',
//   'X-RapidAPI-Host': ''
// }