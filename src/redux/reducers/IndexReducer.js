import { combineReducers } from 'redux'

import { searchReducer } from './SearchReducer'

const rootReducer = combineReducers({
  search: searchReducer,
})

export default rootReducer
