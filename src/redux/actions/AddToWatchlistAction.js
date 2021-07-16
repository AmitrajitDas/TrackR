import { ADD_TO_WATCHLIST } from '../constants/WatchConstants'

export const addToWatchListAction = (movie) => async (dispatch) => {
  dispatch({ type: ADD_TO_WATCHLIST, payload: movie })
}
