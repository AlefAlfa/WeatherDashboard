<script>
  import { getWeatherByCity } from "$lib/api"
  import Degrees from "./Degrees.svelte"

  let API_KEY = "YOUR_API_KEY"
  let city = ""
  $: cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  let weather = {}
  let error
  async function getWeather() {
    try {
      weather = await getWeatherByCity(cityUrl)
      error = undefined
    } catch (err) {
      error = err
    }
    
  }
</script>

<div class="flex justify-center">
  <div class="flex flex-col space-y-2">
    <h1 class="font-bold text-2xl">Weather Dashboard</h1>
    <input class="bg-gray-200 rounded-sm border focus:outline-none px-1 py-1 " type="text" placeholder="Enter City" bind:value={city}>
    <button class="border rounded-sm py-1" on:click={getWeather}>Get Weather</button>
    <Degrees temp={weather.temp} tempMax={weather.tempMax} tempMin={weather.tempMin} name={weather.name} main={weather.main}/>

    {#if error}
       <p class="text-red-500 ">An error occured! {error}</p>
    {/if}
  </div>
</div>



