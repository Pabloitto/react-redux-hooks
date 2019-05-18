import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import {
  fetchDroneLocations,
  leaveDroneInfo
} from '../actions'

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDroneLocations,
  leaveDroneInfo
}, dispatch)

const SharedContainer = (ChildComponent, mapStateToProps) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChildComponent)
}

export default SharedContainer
