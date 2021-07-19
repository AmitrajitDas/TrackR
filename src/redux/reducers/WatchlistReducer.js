import { ADD_TO_WATCHLIST } from '../constants/WatchConstants'

export const watchlistReducer = (state = { watchlistMovies: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return { ...state, watchlistMovies: action.payload }
    default:
      return state
  }
}
