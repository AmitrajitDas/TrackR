import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'

import { useStyles } from './styles'

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            TrackR
          </Typography>
          <Button color='inherit'>Watchlist</Button>
          <Button color='inherit'>Watched</Button>
          <Link to='/add' className={classes.link}>
            <Button variant='contained' color='secondary'>
              +Add
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
