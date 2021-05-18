import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/CategoryDisplay.module.css'

export default function CategoryDisplay({ data }) {
    let movies = []
    for (let i = 0; i < 6; i++) {
        movies.push(data.results[i])
    }

    return(
        <div className={styles.container}>
            <div className={styles.pagetitle}>Movies</div>
                <div className={styles.wrapper}>
                    <div className={styles.pagewrap}> 
                        <div className={styles.pagedetails}>
                            <h1>Movies</h1>
                            <p className={styles.details}>Stream box office hits, classic cinema, acclaimed indies, inspiring documentaries, and much more.</p>
                        </div>
                    </div>
                    <div>
                        <h3>head</h3>
                        <div className={styles.cardwrapper}>
                            {
                                movies.map((movie, index) => <div key={index} className={styles.innercardwrapper}>
                                    <Image src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} width={185} height={278} />
                                    <p className={styles.cardtitle}>{movie.title}</p>
                                    <p className={styles.cardrating}>Rating {movie.vote_average}</p>
                                    <p className={styles.carddetails}>{movie.overview}</p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}