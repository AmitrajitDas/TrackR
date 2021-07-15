import { Grid, Typography, Button, Card } from '@material-ui/core'

import { useStyles } from './styles'

const ResultCard = ({ movie }) => {
  const classes = useStyles()
  return (
    <div className={classes.resultCard}>
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className={classes.poster}
              />
            ) : (
              <div className={classes.fillerPoster}></div>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Typography variant='h5'>{movie.title}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.releaseDate}>
                <Typography variant='body1'>
                  {movie.release_date && movie.release_date.substring(0, 4)}
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Button
                  color='secondary'
                  variant='contained'
                  className={classes.button}
                >
                  Add to Watchlist
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default ResultCard
