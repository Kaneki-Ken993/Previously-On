import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();

router.get('/', async (req, res) => {
    const apiUrl = "https://api.betaseries.com/shows/discover?limit=21";
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