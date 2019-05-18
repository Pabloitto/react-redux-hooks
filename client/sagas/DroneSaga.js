import { take, put, fork, cancel, delay } from 'redux-saga/effects'

import config from '../config'

import { ACTIONS } from '../actions'

import { doRequest } from '../utils'

const { API_URL, DELAY_POLLING } = config

function * onDroneResolved () {
  while (true) {
    console.log('Looking for drone locations...')

    const url = `${API_URL}/api/drone`

    const { data } = yield doRequest({ url })

    yield put({
      type: ACTIONS.LOCATIONS_RESOLVED,
      locations: data
    })

    yield delay(DELAY_POLLING)
  }
}

function * watchDroneLocation () {
  while (yield take(ACTIONS.FETCH_DRONE_LOCATIONS)) {
    const bgSyncTask = yield fork(onDroneResolved)

    yield take(ACTIONS.LEAVE_DRONE_INFO)

    yield cancel(bgSyncTask)
  }
}

export default watchDroneLocation
