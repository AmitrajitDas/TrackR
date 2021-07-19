import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.body.main,
    padding: '5rem',
  },

  cardWrapper: {
    marginTop: '2rem',
  },
  poster: {
    width: '13rem',
    height: '20rem',
    borderRadius: '5px',
    color: 'transparent',
  },
  fillerPoster: {
    backgroundColor: '#dbdada',
    width: '13rem',
    height: '20rem',
    borderRadius: '5px',
    marginRight: '15px',
    display: 'block',
    color: 'transparent',
  },
}))
