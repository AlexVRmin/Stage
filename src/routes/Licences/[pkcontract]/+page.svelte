<!--style-->
<script>

  // @ts-ignore
  export async function load({ params }) {
    return {
      props: {
        licentie: data,
      },
    };
  }

  export let data;
  let licenties = data.licenties;
</script>

<svelte:head>
	<title>EDU-TECH BV | Licenses</title>
</svelte:head>


<main class="m-9 flex flex-col gap-2">
  {#each licenties as licentie}
    <div class="record">
      <span class="w-72">{licentie.Naam}</span>
      <span class="w-24">{licentie.Prijs}</span>
    </div>
  {/each}
</main>
