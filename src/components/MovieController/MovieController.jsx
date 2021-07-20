import { useState } from 'react'
import { IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import CancelIcon from '@material-ui/icons/Cancel'
import { useStyles } from './styles'

const MovieController = ({ movie, type }) => {
  const classes = useStyles()
  const [show, setShow] = useState(false)

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={() => setShow((prev) => !prev)}
      onMouseLeave={() => setShow((prev) => !prev)}
    >
      <IconButton color='secondary'>{show && <VisibilityIcon />}</IconButton>
      <IconButton color='secondary' style={{ color: 'red' }}>
        {show && <CancelIcon />}
      </IconButton>
    </div>
  )
}

export default MovieController
