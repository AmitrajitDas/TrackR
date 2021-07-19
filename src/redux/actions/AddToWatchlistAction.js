import { ADD_TO_WATCHLIST } from '../constants/WatchConstants'

export const addToWatchListAction = (movie) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_WATCHLIST, payload: movie })

  localStorage.setItem(
    'watchlist',
    JSON.stringify(getState().watchlist.watchlistMovies)
  )
}
