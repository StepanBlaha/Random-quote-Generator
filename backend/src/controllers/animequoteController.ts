import { Request, Response } from 'express';
import { getRandomAnimeQuote } from '../services/animequoteService';



export const getAnimeQuote = async (req: Request, res: Response) => {
  try {
    const quote = await getRandomAnimeQuote();
    res.json({ quote }); 
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
};
