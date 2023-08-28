export function isObjectNotEmpty(obj) {
  return Object.keys(obj).length !== 0
}

export let icons = {
  RAINY: "/static/images/raindy.png",
  CLOUDY: "/static/images/cloudy.png",
  CLOUDSUN: "/static/images/cloudsun.png",
  SUNSHINE: "/static/images/sunshine.png",
}

export function getIcon(weather) {
  switch(weather) {
    case "Thunderstorm":
      return icons.RAINY
    case "Rain":
      return icons.RAINY
    case "Drizzle":
      return icons.RAINY
    case "Snow":
      return icons.RAINY
    case "Atmosphere":
      return icons.SUNSHINE
    case "Clear":
      return icons.SUNSHINE
    case "Clouds":
      return icons.SUNSHINE
  }
}