import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/IndexReducer'

const middleware = [thunk]

const watchlistFromStorage = localStorage.getItem('watchlist')
  ? JSON.parse(localStorage.getItem('watchlist'))
  : []

const initialState = {
  watchlist: { watchlistMovies: watchlistFromStorage },
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
