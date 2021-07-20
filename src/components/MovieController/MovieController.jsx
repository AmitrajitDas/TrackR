import { useState } from 'react'
import { IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import CancelIcon from '@material-ui/icons/Cancel'
import { useStyles } from './styles'

const MovieController = ({ movie, type }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <IconButton color='secondary'>
        <VisibilityIcon />
      </IconButton>
      <IconButton color='secondary' style={{ color: 'red' }}>
        <CancelIcon />
      </IconButton>
    </div>
  )
}

export default MovieController
