import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import CancelIcon from '@material-ui/icons/Cancel'

import {
  removeFromWatchListAction,
  addToWatchedAction,
} from '../../redux/actions/WatchlistActions'
import { useStyles } from './styles'

const MovieController = ({ movie, type }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={() => setShow((prev) => !prev)}
      onMouseLeave={() => setShow((prev) => !prev)}
    >
      <IconButton
        color='secondary'
        onClick={() => dispatch(addToWatchedAction(movie))}
      >
        {show && <VisibilityIcon />}
      </IconButton>
      <IconButton
        color='secondary'
        style={{ color: 'red' }}
        onClick={() => dispatch(removeFromWatchListAction(movie.id))}
      >
        {show && <CancelIcon />}
      </IconButton>
    </div>
  )
}

export default MovieController
