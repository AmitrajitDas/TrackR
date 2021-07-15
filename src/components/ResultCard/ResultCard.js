import React from 'react'
import { useStyles } from './styles'

const ResultCard = ({ movie }) => {
  const classes = useStyles()
  return (
    <div className={classes.resultCard}>
      <div className={classes.posterWrapper}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className={classes.poster}
          />
        ) : (
          <div className={classes.fillerPoster}></div>
        )}
      </div>
    </div>
  )
}

export default ResultCard
