import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.body.main,
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem',
  },
  cardWrapper: {
    marginTop: '2rem',
  },
  alert: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '22rem',
    marginTop: '-17rem',
  },
}))
