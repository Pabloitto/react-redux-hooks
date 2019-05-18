import { ACTIONS } from '../actions'

const initialState = {
  locations: []
}

const DroneReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case ACTIONS.LOCATIONS_RESOLVED: {
      newState.locations = action.locations
      return newState
    }
    default:
      return state
  }
}

export default DroneReducer
