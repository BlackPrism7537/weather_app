import React, { useState } from 'react'
import { getWeather } from './api/weather'

// Build date string
function dateBuilder(date) {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const App = () => {
	const [search, setSearch] = useState('')
	const [weather, setWeather] = useState({})

	const handleChange = async (e) => {
		if (e.key === 'Enter' && search !== '') {
			const data = await getWeather(search)
			setSearch('')
			setWeather(data)
		}
	}


	return (
		<div
			className={
				(typeof weather.main != 'undefined') ?
					(weather.main.temp > 16 ? 'app warm' : 'app')
					:
					'app warm'

			}
		>
			<main>
				<div className='search-box'>
					<input
						type='text'
						placeholder='Search...'
						className='search-bar'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyPress={handleChange}
					/>
				</div>
				{
					typeof weather.main != 'undefined' && (
						<>
							<div className='location-box'>
								<div className='location'>{weather.name}, {weather.sys.country}</div>
								<div className='date'>{dateBuilder(new Date())}</div>
							</div>
							<div className='weather-box'>
								<div className='temp'>{Math.round(weather.main.temp)}°c</div>
								<div className='weather'>{weather?.weather[0].description}</div>
							</div>
						</>
					)
				}
			</main>
		</div>
	)
}


export default App

