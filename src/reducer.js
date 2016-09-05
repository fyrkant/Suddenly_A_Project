import { C } from './constants'
import initialState from './initialstate'

export default (currentState = initialState, action) => {
  const newState = Object.assign({}, currentState)

  switch (action.type) {
    case C.RECEIVING_DATA:
      newState.data = action.data
      return newState
    case C.SELECT_MESSAGE:
      newState.data.messages.map(message => {
        if (message.id === newState.selected.id) {
          newState.selected = {id: null}
        }
        if (message.id === action.id) {
          newState.selected = message
        }
      })
      return newState
    case C.DESELECT_MESSAGE:
      newState.selected = {id: null}
      return newState
    case C.CHANGE_FILTER:
      newState.filter = action.filter
      return newState
    case C.CHANGE_ORDER:
      newState.order = action.order
      return newState
    case C.FOCUS:
      console.log(action.id)
      newState.focus.id = action.id
      return newState
    case C.TICK:
      newState.ticker = action.tickerString
      return newState
    default:
      return currentState
  }
}
