
import Button from "../../components/Button";
import styles from "./index.module.css"
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';


// Fetch the data
const fetchQuote = async()=>{
    const response = await fetch('http://localhost:5000/api/quote')
    const data = await response.json();
    return{
        quote: data.quote.data.content,
        character: data.quote.data.character.name,
        series: data.quote.data.anime.name,
    }
}

export default function AnimeQuotes(){
    // data - returned data
    // refetch - the function to call
    // isFetching - true when still fetching - usefull for replacing with loader
    // error - if query fails contains error
    // The names can be custom using this format -  data: quoteData
    const { data, refetch, isFetching, error } = useQuery({
        queryKey: ['animeQuote'], // Key - something like id
        queryFn: fetchQuote, // Callback function
        enabled: false, // Stops the query from running on page load
      });
      // Variables with fallback values
      const quote = data?.quote || "";
      const character = data?.character || "";
      const series = data?.series || "";




    return(
        <>
        <div className={styles.main}>
            <div className={styles.center}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        <h2>Random Anime Quote</h2>
                        <p>Get inspired by powerful words from your favorite anime characters.
                        Click the button to see a new quote every time!</p>
                    </div>
                </div>

                <div className={styles.content}>

                    <div className={styles.contentCenter}>
                        <div className={styles.quoteCard}>
                            <div className={styles.quoteCardName}>Quote of the Day</div>
                            <div className={styles.quote}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height="80" width="80">
                                    <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"></path>
                                </svg>
                            </div>
                            <div className={styles.quoteText}>{quote}</div>
                            <div className={styles.quoteAuthor}>- by {character} <br/> <span>({series})</span>   <svg height="" width="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
                            </div>
                        </div>
                        <div className={styles.quoteButtonWrapper}>

                        <Button className={styles.quoteButton} onClick={()=>refetch()}>Generate</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



