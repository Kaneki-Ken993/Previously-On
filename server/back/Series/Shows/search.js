import express from 'express';
import axios from 'axios';
import 'dotenv/config';
const router = express.Router();



router.get('/', async (req, res) => {
    const title = req.query.title;
    const apiUrl = `https://api.betaseries.com/shows/search?title=${title}`;
    const params = {
      key: process.env.REACT_APP_API_KEY,
    };

    try {
        const response = await axios.get(apiUrl, { params });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from BetaSeries API:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

export default router;