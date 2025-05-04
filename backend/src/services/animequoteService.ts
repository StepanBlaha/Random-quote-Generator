import axios from 'axios';


export const getRandomAnimeQuote = async () =>{
    const response  = await axios.get('https://api.animechan.io/v1/quotes/random', {
		headers: {
				'x-api-key': process.env.ANIME_QUOTE_KEY,
		},
    });
    const data = response.data;
    return data;
}