export const ACTIONS = {
  FETCH_DRONE_LOCATIONS: 'FETCH_DRONE_LOCATIONS',
  LOCATIONS_RESOLVED: 'LOCATIONS_RESOLVED',
  LEAVE_DRONE_INFO: 'LEAVE_DRONE_INFO'
}

export const fetchDroneLocations = () => ({
  type: ACTIONS.FETCH_DRONE_LOCATIONS
})

export const leaveDroneInfo = () => ({
  type: ACTIONS.LEAVE_DRONE_INFO
})
