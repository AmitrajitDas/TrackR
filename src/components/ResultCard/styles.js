import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  resultCard: {
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterWrapper: {
    marginRight: '3rem',
  },

  poster: {
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'transparent',
  },
  fillerPoster: {
    backgroundColor: '#dbdada',
    width: '75px',
    height: '113px',
    borderRadius: '5px',
    marginRight: '15px',
    display: 'block',
    color: 'transparent',
  },
}))
