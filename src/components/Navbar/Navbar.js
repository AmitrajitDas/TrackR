import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useStyles } from './styles'

const Navbar = () => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            TrackR
          </Typography>
          <Button color='inherit'>Watchlist</Button>
          <Button color='inherit'>Watched</Button>
          <Button variant='contained' color='secondary'>
            +Add
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
