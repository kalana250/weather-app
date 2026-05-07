# 🌤️ Weather App

A full-stack weather application built with React.js and Node.js that provides real-time weather data and 5-day forecasts for any city worldwide.

<img width="1781" height="880" alt="image" src="https://github.com/user-attachments/assets/4644a80a-491b-4c58-9d16-05135a1d65e5" />


---

## ✨ Features

- 🔍 **Search Any City** - Get weather data for any location worldwide
- 🌡️ **Current Weather** - Temperature, humidity, wind speed, and more
- 📅 **5-Day Forecast** - Plan ahead with detailed weather predictions
- 🕐 **Search History** - Quick access to recently searched cities
- 📱 **Fully Responsive** - Works on mobile, tablet, laptop, and 4K screens
- 🔒 **Secure API** - Backend proxy protects API keys
- ⚡ **Fast Loading** - Optimized performance with async data fetching

---

## 🛠️ Tech Stack

### Frontend

| Technology  | Version           |
| ----------- | ----------------- |
| React.js    | 18.x              |
| CSS3        | Custom Responsive |
| Axios       | HTTP Client       |
| Context API | State Management  |

### Backend

| Technology | Version               |
| ---------- | --------------------- |
| Node.js    | 18.x                  |
| Express.js | 4.x                   |
| Axios      | API Requests          |
| dotenv     | Environment Variables |

### API

| Service        | Purpose      |
| -------------- | ------------ |
| OpenWeatherMap | Weather Data |

---

## 📁 Project Structure

<img width="268" height="617" alt="image" src="https://github.com/user-attachments/assets/4cb33d35-e026-4b3c-92e9-b8b2c79f94a9" />




---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenWeatherMap API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   Install Backend Dependencies
   ```


cd server
npm install
Create Environment File


# In server folder, create .env file

echo "WEATHER_API_KEY=your_api_key_here" > .env
echo "PORT=5000" >> .env
Install Frontend Dependencies


cd ../client
npm install
Start the Application


# Terminal 1 - Start Backend

cd server
node server.js

# Terminal 2 - Start Frontend

cd client
npm start
Open in Browser

http://localhost:3000

📱 Responsive Breakpoints
Device Width Layout
Mobile Small ≤ 320px Stacked
Mobile Medium 321px - 375px Stacked
Mobile Large 376px - 425px Stacked
Tablet 426px - 768px Side by Side
Laptop 769px - 1440px Side by Side
4K Screen ≥ 1441px Large Layout

🔑 API Setup
Visit OpenWeatherMap
Create a free account
Navigate to API Keys section
Copy your API key
Add to server/.env file
env

WEATHER_API_KEY=your_actual_api_key_here
PORT=5000

🧪 Testing
Test Backend

# Open browser and visit

http://localhost:5000/test

# Expected response

{
"message": "Server is working!",
"apiKey": "API Key Found ✅"
}
Test Weather API

# Current Weather

http://localhost:5000/api/weather/current?city=London

# 5-Day Forecast

http://localhost:5000/api/weather/forecast?city=London

🎨 Features Breakdown
Search Bar
Real-time city search
Full-width on mobile devices
Side-by-side on larger screens
Hover animations
Weather Card
Current temperature display
Weather condition icons
Feels like temperature
Humidity and wind speed
Responsive grid layout
Forecast Section
5-day weather prediction
Horizontal scroll on mobile
Grid layout on desktop
Weather icons for each day
Search History
Last 5 searches saved
Quick re-search functionality
Session-based storage
Clean chip design

🔧 Available Scripts
Client

npm start # Start development server

npm build # Build for production

npm test # Run tests

npm eject # Eject from Create React App

Server

node server.js # Start server
nodemon server.js # Start with auto-restart

🌐 Deployment
Backend (Railway/Render)

# Set environment variables in platform

WEATHER_API_KEY=your_key
PORT=5000

# Deploy

git push main
Frontend (Vercel/Netlify)

# Build

npm run build

# Deploy build folder

📸 Screenshots
Desktop View
Desktop

Mobile View
Mobile

Tablet View
Tablet

Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍ Author
Kalana Heshan

GitHub: @kalana250
Email: heshankalana168@gmail.com

🙏 Acknowledgments
OpenWeatherMap for weather API
React.js for the frontend framework
Express.js for the backend framework
📞 Support
If you have any questions or issues, please open an issue in the repository or contact me directly.

<div align="center">
Made with ❤️ using React.js & Node.js

⭐ Star this repo if you found it helpful!

</div> 
