import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from '../constants/WatchConstants'

export const addToWatchListAction = (movie) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_WATCHLIST, payload: movie })

  localStorage.setItem(
    'watchlist',
    JSON.stringify(getState().watchlist.watchlistMovies)
  )
}

export const removeFromWatchListAction = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_WATCHLIST, payload: id })
}
