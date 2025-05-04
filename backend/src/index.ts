import express from 'express';
import cors from 'cors';
import quoteRoutes from './routes/animequoteRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', quoteRoutes); 

app.listen(5000, () => console.log('Server running on port 5000'));
