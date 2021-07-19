import { ADD_TO_WATCHLIST } from '../constants/WatchConstants'

export const watchlistReducer = (state = { watchlistMovies: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return { watchlistMovies: [action.payload, ...state.watchlistMovies] }
    default:
      return state
  }
}
