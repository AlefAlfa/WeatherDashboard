<script>
import Icon from "./Icon.Svelte";

  export let temp = "--"
  export let name = "--"
  export let tempMax = "-"
  export let tempMin = "-"
  export let main = ""

</script>

<div class="flex">
  <div class="w-40 bg-gray-900 ">
 
      <h1 class="text-white text-7xl font-thin mt-4 flex justify-center items-center">{temp}</h1>
      <h1 class="font-bold text-2xl text-white mb-4 px-2 flex justify-center">{name}</h1>
  </div>
  
  <div class="flex flex-col justify-end">
    <div class="w-32 bg-white flex justify-center">
      <Icon {main} />
    </div>
    
    <div class="w-full justify-center text-white font-bold bg-blue-500 flex space-x-3">
      <p class="mt-2 mb-2">H:{tempMax}</p>
      <p class="mt-2 mb-2">L:{tempMin}</p>
    </div>
  </div>
</div>