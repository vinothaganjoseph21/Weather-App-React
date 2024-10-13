import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const apiKey = 'fa0fcc3b26cfb3a5b16f8681f35d9029';

    const fetchWeather = async () => {
        if (!city) return;
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            console.log(response.data); // Log the response to check
            setWeather(response.data);
        } catch (error) {
            alert('City not found');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
            <h1 className="text-4xl font-bold mb-8">Weather App</h1>

            <div className="flex flex-col items-center">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    className="border-2 border-gray-300 p-2 rounded-md w-80 mb-4"
                />
                <button
                    onClick={fetchWeather}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Get Weather
                </button>
            </div>

            {weather && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                    <h2 className="text-2xl font-bold">{weather.name}</h2>
                    <p className="text-xl">{weather.main.temp}°C</p>
                    <p className="text-sm">{weather.weather[0].description}</p>
                    <p className="text-md font-semibold">Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
