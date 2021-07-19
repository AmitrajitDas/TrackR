import { useSelector } from 'react-redux'
import { Typography, Grid } from '@material-ui/core'

import MovieCard from '../../components/MovieCard/MovieCard.jsx'
import { useStyles } from './styles'

const Watchlist = () => {
  const classes = useStyles()

  const { watchlistMovies } = useSelector((state) => state.watchlist)
  console.log(watchlistMovies)
  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <Typography variant='h3' color='secondary'>
          My Watchlist
        </Typography>
      </div>
      <Grid container className={classes.cardWrapper}>
        {watchlistMovies.map((movie) => (
          <Grid item xs={3}>
            <MovieCard movie={movie} type='watchlist' />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Watchlist
