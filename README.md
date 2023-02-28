
![Logo](https://brands.home-assistant.io/_/openweathermap/logo.png)

<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png' width='600' height='300' />
# 6Day of Weather

An OpenWeatherAPI Project built on






[OpenWeatherMapAPI](https://openweathermap.org/)
[NextJS](https://nextjs.org/)
[TailwindCSS](tailwindcss.com/)

## API Reference

#### Get all items

```http
  GET https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${apiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `location` | `string` | **Required**. Your Location |
| `units` | `string` | **Required**. Your Preferred Unit |




## Run Locally

Clone the project

```bash
  git clone https://github.com/ssn00zee/S7VEN-Weather
```

Go to the project directory

```bash
  cd S7VEN-Weather
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

