import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"


  export const fetchApi = async (url) => {
      const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '54bf0a01c5mshe4b096f90afd3d6p1278f9jsn9180ef6803bc'
          }
      })
      return data
  }