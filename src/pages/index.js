import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Image from 'next/image'



export default function Home() {

  
  const [data, setData] = useState()
  const grabWeather = useRef(false)
  
  
  useEffect(() => {
    const apiKey = process.env.API_KEY
    const location = 'vancouver'
    const units = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${apiKey}`
    const fetchWeather = async () => {
  
      try {
        const res = await axios.get(url)
        // setData(res)
        console.log(res.data)
  
        const dataArr = []
  
        let weatherData = res.data.list.map((weather, i) => {
          console.log(parseInt(weather.dt_txt.substr(8,2), 10))
          let num = parseInt(weather.dt_txt.substr(8, 2), 10)
  
          if (num !== dataArr.find(element => element === num)){
            dataArr.push(num)
            console.log('here')
            console.log(res.data.list[i])
  
            var month = ''
            var icon = ''
    
            if(weather.dt_txt.substr(5,2) == 1) {
              month = 'January'
            } else if (weather.dt_txt.substr(5,2) == 2) {
              month = 'February'
            } else if (weather.dt_txt.substr(5,2) == 3) {
              month = 'March'
            } else if (weather.dt_txt.substr(5,2) == 4) {
              month = 'April'
            } else if (weather.dt_txt.substr(5,2) == 5) {
              month = 'May'
            } else if (weather.dt_txt.substr(5,2) == 6) {
              month = 'June'
            } else if (weather.dt_txt.substr(5,2) == 7) {
              month = 'July'
            } else if (weather.dt_txt.substr(5,2) == 8) {
              month = 'August'
            } else if (weather.dt_txt.substr(5,2) == 9) {
              month = 'September'
            } else if (weather.dt_txt.substr(5,2) == 10) {
              month = 'October'
            } else if (weather.dt_txt.substr(5,2) == 11) {
              month = 'November'
            } else if (weather.dt_txt.substr(5,2) == 12) {
              month = 'December'
            }
    
            if (weather.weather[0].main == 'Clouds'){
              icon = '/myicons/icons/cloudy.png'
            } else if (weather.weather[0].main == 'Clear'){
              icon = '/myicons/icons/clear-day.png'
            } else if (weather.weather[0].main == 'Atmosphere'){
              icon = '/myicons/icons/fog.png'
            } else if (weather.weather[0].main == 'Rain'){
              icon = '/myicons/icons/heavy-showers.png'
            } else if (weather.weather[0].main == 'Drizzle'){
              icon = '/myicons/icons/showers.png'
            } else if (weather.weather[0].main == 'Snow'){
              icon = '/myicons/icons/snow.png'
            } else if (weather.weather[0].main == 'Thunderstorm'){
              icon = '/myicons/icons/thunderstorm-snow.png'
            }
    
            var now = new Date(weather.dt_txt)
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            var day = days[now.getDay()]
            
            return (
                <div key={now} className='font-neuton bg-black text-white flex items-center justify-center rounded-xl p-4 '>
                    <Image
                      src={icon}
                      alt={icon}
                      width={180}
                      height={180}
                      priority
                    />
                  <div className='flex flex-col'>
                    <p>
                      {day} <br/> {month} {weather.dt_txt.substr(8,2)}, {weather.dt_txt.substr(0,4)}
                    </p>
                    <p>{weather.main.temp.toFixed(1)}°</p>
                    <p>{weather.weather[0].main} </p>
                  </div> 
                </div>
            )
          }
  
        })
  
        console.log(weatherData, 'weather data')
        setData(weatherData)
      } catch (e) {
        console.log(e)
      }
    }

    // if (grabWeather.current === true){
      fetchWeather()
    // }
    // return () => {
    //   grabWeather.current = true
    // }

  }, [])

  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

  return (
    <>
      <Head>
        <title>Weather for 6 Days</title>
        <meta name="description" content="Weather API App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myicons/icons/clear-day.png" />
      </Head>
      <main className='font-neuton h-screen flex justify-start items-center flex-col'>
        <div className='flex h-full justify-evenly items-center flex-col'>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-8xl'>Vancouver, BC Weather</h1>
            <h3>Last Updated: {date}</h3>
          </div>
          <div className='grid grid-rows-1 grid-cols-3 gap-2'>
            {data &&
              data.map((div, i) => {
                console.log(div)
                return (

                  div

                )
              })
            }
          </div>
        </div>
      </main>

    </>
  )
}
