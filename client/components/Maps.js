import React, { useEffect } from 'react'

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

import { CardLayout } from './CardLayout'

import config from '../config'

const styles = {
  mapContent: {
    height: '400px'
  }
}

export const DroneMap = ({
  lat, lng, zoom, google
}) => {
  const position = { lat, lng }
  return (
    <div style={styles.mapContent}>
      <Map
        google={google}
        className='map'
        center={position}
        zoom={zoom || 10}>
        <Marker position={position} title='Drone' />
      </Map>
    </div>
  )
}

const GoogleMap = GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY
})(DroneMap)

export const Maps = ({
  fetchDroneLocations,
  leaveDroneInfo,
  lat,
  lng
}) => {
  useEffect(() => {
    fetchDroneLocations()
    return () => {
      leaveDroneInfo()
    }
  }, [])
  return (
    <CardLayout title='Drone Maps Visualization'>
      <GoogleMap lat={lat} lng={lng} />
    </CardLayout>
  )
}
