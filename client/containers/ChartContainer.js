import { Charts } from '../components/Charts'

import SharedContainer from './SharedContainer'

const mapStateToProps = (state) => ({
  locations: state.locations
})

export default SharedContainer(Charts, mapStateToProps)
