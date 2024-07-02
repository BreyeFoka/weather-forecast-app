import React from 'react'

const CurrentWeather = ({data}) => {
  return (
    <div>
        <h2>{data.name}</h2>
        <p>{data.weather[0].description}</p>
        <p>{data.main.temp}C</p>
    </div>
  )
}

export default CurrentWeather