import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'

import ResultCard from '../../components/ResultCard/ResultCard'
import { searchAction } from '../../redux/actions/SearchAction'
import { useStyles } from './styles'

const Add = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState('')

  const { loading, movies, error } = useSelector((state) => state.search)

  const formHandling = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    dispatch(searchAction(e.target.value))
    console.log(movies)
    // if (!error) {
    //   setResults(movies.results)
    // } else {
    //   setResults([])
    // }
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
      {movies && (
        <ul className={classes.results}>
          {movies.results &&
            movies.results.map((movie) => <ResultCard movie={movie} />)}
        </ul>
      )}
    </div>
  )
}

export default Add
