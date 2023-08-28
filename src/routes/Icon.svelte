<script>
  export let main
</script>

{#if main === ""}
   <p class="h-16 mb-3 mt-3">--</p>
{/if}

{#if main === "Thunderstorm"}
  <img src="/images/rainy.png" alt="" class="h-16 mb-3 mt-3">
{/if}

{#if main === "Rain"}
  <img src="/images/rainy.png" alt="" class="h-16 mb-3 mt-3">
{/if}

{#if main === "Drizzle"}
  <img src="/images/rainy.png" alt="" class="h-16 mb-3 mt-3">
{/if}

{#if main === "Snow"}
  <img src="/images/rainy.png" alt="" class="h-16 mb-3 mt-3">
{/if}

{#if main === "Atmosphere"}
  <img src="/images/sunshine.png" alt="" class="h-16 mb-3 mt-3">
{/if}

{#if main === "Clear"}
  <img src="/images/sunshine.png" alt="" class="h-16 mb-3 mt-3">
{/if}

{#if main === "Clouds"}
  <img src="/images/cloudy.png" alt="" class="h-16 mb-3 mt-3">
{/if}

  