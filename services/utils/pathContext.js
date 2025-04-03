// News API
const API_KEY = "b284e3824bd94c6e9096f91b5028184d";
const API_URL = {
    LOCAL: `https://newsapi.org/v2/everything?q=tesla&from=2025-03-03&sortBy=publishedAt&apiKey=${API_KEY}`,
};
// Weather API
const WEATHER_API_KEY = '831807616580c7aad18be484cb42ff9f'
const WEATHER_URL = {
    LOCAL: 'https://api.openweathermap.org/data/2.5/weather'
}

export const API_CONSTANTS = {
    API: process.env.DEVELOPMENT_VERSION || API_URL['LOCAL'],
    WEATHER_API: process.env.DEVELOPMENT_VERSION || WEATHER_URL['LOCAL'],
    WEATHER_API_KEY: process.env.DEVELOPMENT_VERSION || WEATHER_API_KEY,
    METHOD: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
    },
};
