import { ADD_TO_WATCHLIST } from '../constants/WatchConstants'

export const watchlistReducer = (state = { watchlist: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return { ...state, watchlist: action.payload }
    default:
      return state
  }
}
