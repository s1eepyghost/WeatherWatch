# WeatherWatch 🌤️

WeatherWatch is a dynamic, user-friendly weather application built using React, designed to provide accurate, real-time weather information at your fingertips. With a minimalist design and smooth animations, WeatherWatch offers a seamless user experience while keeping you updated on current and forecasted weather conditions, whether you’re planning a weekend getaway or just want to check the day’s temperature.

## 🔍 Features

- **Current Weather**: Real-time data for your location or any city worldwide.
- **5-Day Forecast**: A detailed look into upcoming weather to help plan ahead.
- **Interactive UI**: Animated icons, color themes, and smooth transitions for a visually engaging experience.
- **Search Functionality**: Quickly search for any location and get instant weather updates.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
- **Error Handling**: User-friendly messages for invalid locations or network issues.

## 🎨 UI/UX Highlights

The design of WeatherWatch is intentionally minimalist and intuitive:
- **Animated Weather Icons**: Icons adjust dynamically to reflect current conditions.
- **Adaptive Backgrounds**: Background colors change based on weather, making it easy to see at a glance.
- **Temperature Toggle**: Switch between Celsius and Fahrenheit for convenience.
- **Responsive Layout**: Automatically adapts to any screen size or orientation.

## 🛠️ Technologies Used

- **React**: For building a responsive, single-page application.
- **Axios**: To fetch data from weather APIs quickly and reliably.
- **OpenWeatherMap API**: Provides the weather data, including current conditions and forecast.
- **CSS Modules**: Ensures styles are modular and scoped, preventing global styles conflicts.

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/s1eepyghost/WeatherWatch.git
   cd WeatherWatch
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Get an API Key**: Sign up on [OpenWeatherMap](https://openweathermap.org/) and get your API key.

4. **Add API Key**:
   - Create a `.env` file in the root directory.
   - Add your API key in the `.env` file:

     ```plaintext
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

5. **Run the app:**

   ```bash
   npm start
   ```

   Your app should be running on `http://localhost:3000`!

## 📸 Screenshots

| Home Screen         | Weather Details       | 5-Day Forecast       |
|---------------------|-----------------------|-----------------------|
| ![Home Screen](./screenshots/home.png) | ![Weather Details](./screenshots/details.png) | ![5-Day Forecast](./screenshots/forecast.png) |

## 📝 Future Improvements

- **Hourly Forecast**: To give users a detailed hourly breakdown of weather changes.
- **Dark Mode**: For a more comfortable nighttime experience.
- **Geo-Location**: Automatically detect user location on app start.
- **Air Quality Index**: Display air quality details for health-conscious users.

## 🤝 Contributing

Feel free to submit a pull request or open an issue for any suggestions, bug fixes, or improvements.

---

l request or open an issue for any suggestions, bug fixes, or improvements.

---

