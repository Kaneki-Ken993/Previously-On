import axios from 'axios';

const API_KEY = "501ec821172e";
const api = axios.create({
  baseURL: 'https://api.betaseries.com',
  headers: {
    'X-BetaSeries-Key': `${API_KEY}`, 
    'Content-Type': 'application/json'
  }
});

export default api;
