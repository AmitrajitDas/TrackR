import { useState } from 'react'
import { TextField } from '@material-ui/core'

import { useStyles } from './styles'

const Add = () => {
  const classes = useStyles()

  const [searchTerm, setSearchTerm] = useState('')

  const formHandling = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
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
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        ></TextField>
      </div>
    </div>
  )
}

export default Add
