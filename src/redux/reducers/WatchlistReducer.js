import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from '../constants/WatchConstants'

export const watchlistReducer = (state = { watchlistMovies: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return { watchlistMovies: [action.payload, ...state.watchlistMovies] }
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlistMovies: state.watchlistMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      }
    default:
      return state
  }
}
