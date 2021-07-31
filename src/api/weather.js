
const api = {
    key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    url: process.env.REACT_APP_OPEN_WEATHER_API_URL,
}

export const getWeather = async (query) => {
    const res = await fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    return await res.json()
}