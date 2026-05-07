const express = require('express')
const axios = require('axios')
const router = express.Router()

const API_KEY = process.env.WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// GET current weather
router.get('/current', async (req, res) => {
  try {
    const { city } = req.query

    // ✅ ADD THIS - Check if API key is loading
    console.log('API KEY:', API_KEY)
    console.log('City received:', city)

    if (!city) {
      return res.status(400).json({
        error: 'City name is required'
      })
    }

    // ✅ ADD THIS - See full URL being called
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log('Calling URL:', url)

    const response = await axios.get(url)

    const weatherData = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      visibility: response.data.visibility / 1000,
    }

    console.log('Weather data fetched successfully!')
    res.json(weatherData)

  } catch (error) {
    // ✅ ADD THIS - See exact error message
    console.log('ERROR STATUS:', error.response?.status)
    console.log('ERROR MESSAGE:', error.response?.data)
    console.log('FULL ERROR:', error.message)

    if (error.response?.status === 404) {
      return res.status(404).json({ error: 'City not found' })
    }
    if (error.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid API Key' })
    }
    res.status(500).json({
      error: 'Server error',
      details: error.message  // ← Send error to frontend
    })
  }
})

// GET 5-day forecast
router.get('/forecast', async (req, res) => {
  try {
    const { city } = req.query

    // ✅ ADD THIS
    console.log('Forecast API KEY:', API_KEY)
    console.log('Forecast City:', city)

    if (!city) {
      return res.status(400).json({
        error: 'City name is required'
      })
    }

    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    console.log('Forecast URL:', url)

    const response = await axios.get(url)

    const dailyForecast = response.data.list
      .filter(item => item.dt_txt.includes('12:00:00'))
      .map(item => ({
        date: item.dt_txt.split(' ')[0],
        temperature: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed,
      }))

    console.log('Forecast fetched successfully!')
    res.json(dailyForecast)

  } catch (error) {
    // ✅ ADD THIS
    console.log('FORECAST ERROR STATUS:', error.response?.status)
    console.log('FORECAST ERROR MESSAGE:', error.response?.data)
    console.log('FORECAST FULL ERROR:', error.message)

    if (error.response?.status === 404) {
      return res.status(404).json({ error: 'City not found' })
    }
    if (error.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid API Key' })
    }
    res.status(500).json({
      error: 'Server error',
      details: error.message
    })
  }
})

module.exports = router