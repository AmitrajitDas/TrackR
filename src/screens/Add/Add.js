import { useState } from 'react'
import { TextField } from '@material-ui/core'

import { useStyles } from './styles'

const Add = () => {
  const classes = useStyles()

  const [searchTerm, setSearchTerm] = useState('')

  const formHandling = (e) => {
    e.preventDefault()

    setSearchTerm(e.target.value)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputWrapper}>
        <TextField
          placeholder='Search for Movies'
          variant='outlined'
          value={searchTerm}
          onChange={formHandling}
          className={classes.search}
        ></TextField>
      </div>
    </div>
  )
}

export default Add
