import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  ADD_TO_WATCHED,
  MOVE_TO_WATCHLIST,
  MARKED_AS_WATCHED,
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

export const addToWatchedAction = (movie) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_WATCHED, payload: movie })

  localStorage.setItem(
    'watched',
    JSON.stringify(getState().watchlist.watchedMovies)
  )
}

export const moveToWatchlistAction = (movie) => async (dispatch) => {
  dispatch({ type: MOVE_TO_WATCHLIST, payload: movie })
}

export const markedAsWatchedAction = (id) => async (dispatch) => {
  dispatch({ type: MARKED_AS_WATCHED, payload: id })
}
