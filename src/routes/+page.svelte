<script>
  export let data;
</script>

<svelte:head>
  <title>Plan Zajęć</title>
</svelte:head>

<main>
  <div class="w-full text-center bg-base-300 py-6 text-3xl font-bold">
    <span>Plan Zajęć</span>
    <div id="clock" class="clock"></div>
    <div id="pietra" class="pietra"><a href="index553.html"> Piętra</a></div>
  </div>
  
  

  <div class="grid place-items-center">
    <table class="my-8">
      <tr class="text-center text-lg">
        <th class="border w-20 py-1 bg-base-200"></th>
        {#each Object.keys(data["lectures"]) as weekday}
          {#if data["lectures"][weekday].length > 0}
            <th class="border w-36 py-1 bg-base-200">{weekday}</th>
          {/if}
        {/each}
      </tr>
      {#each data["hourList"] as hour}
        <tr class="text-center">
          <th class="border bg-base-200">{hour}</th>
          {#each Object.keys(data["lectures"]) as weekday}
            {#if data["lectures"][weekday].length > 0}
              <td class="border w-36">
                {#if data["lectures"][weekday].find((lecture) => lecture.startTime == hour)}
                  {data["lectures"][weekday].find(
                    (lecture) => lecture.startTime == hour,
                  )["lectures"]}
                {:else}
                  -
                {/if}
              </td>
            {/if}
          {/each}
        </tr>
      {/each}
    </table>
  </div>
</main>
