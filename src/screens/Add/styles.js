import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem',
  },

  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  search: {
    marginTop: '5rem',
  },
}))
