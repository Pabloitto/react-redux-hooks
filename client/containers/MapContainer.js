import SharedContainer from './SharedContainer'

import { Maps } from '../components/Maps'

const mapStateToProps = (state) => {
  const { locations } = state
  const length = locations.length
  const lastLocation = locations[length - 1]
  if (!lastLocation) {
    return {}
  }
  return {
    lat: lastLocation.latitude,
    lng: lastLocation.longitude
  }
}

export default SharedContainer(Maps, mapStateToProps)
