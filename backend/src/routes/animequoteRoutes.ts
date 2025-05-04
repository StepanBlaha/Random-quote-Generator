import express from 'express';
import { getAnimeQuote } from '../controllers/animequoteController';

const router = express.Router();

router.get('/quote', getAnimeQuote);

export default router;
