const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const weatherRoutes = require('./routes/weather')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
  res.json({
    message: 'Server is working!',
    apiKey: process.env.WEATHER_API_KEY ? 'API Key Found ✅' : 'API Key Missing ❌'
  })
})

app.use('/api/weather', weatherRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log('API Key loaded:', process.env.WEATHER_API_KEY ? 'YES ✅' : 'NO ❌')
})