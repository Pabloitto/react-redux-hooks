import React, { useEffect } from 'react'

import { Chart } from 'react-google-charts'

import { CardLayout } from './CardLayout'

import { getTodayInFormat, getLastNMinutes } from '../utils'

const createChartData = (locations) => {
  const data = getLastNMinutes(locations)
  return [
    [
      { type: 'date', label: getTodayInFormat() },
      { type: 'number', label: 'temperature' }
    ],
    ...data
  ]
}

const chartOptions = {
  chart: { title: 'Drone Temperatures' },
  curveType: 'function',
  width: '100%',
  height: '400',
  legend: { position: 'none' }
}

const ChartContent = ({ locations = [] }) => {
  return (
    <Chart
      width='100%'
      height='500'
      chartType='LineChart'
      data={createChartData(locations)}
      options={chartOptions}
    />
  )
}

export const Charts = ({
  fetchDroneLocations,
  leaveDroneInfo,
  locations
}) => {
  useEffect(() => {
    fetchDroneLocations()
    return () => {
      leaveDroneInfo()
    }
  }, [])
  return (
    <CardLayout title='Drone Chart Visualization'>
      <ChartContent locations={locations} />
    </CardLayout>
  )
}
