import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  ADD_TO_WATCHED,
} from '../constants/WatchConstants'

export const watchlistReducer = (
  state = { watchlistMovies: [], watchedMovies: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlistMovies: [action.payload, ...state.watchlistMovies],
      }
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlistMovies: state.watchlistMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      }
    case ADD_TO_WATCHED:
      return {
        ...state,
        watchlistMovies: state.watchlistMovies.filter(
          (movies) => movies.id !== action.payload.id
        ),
        watchedMovies: [action.payload, ...(state.watchedMovies || [])],
      }
    default:
      return state
  }
}
