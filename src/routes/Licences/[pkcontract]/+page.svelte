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

  import Header from "../../../components/Header.svelte"; 
</script>

<svelte:head>
	<title>EDU-TECH BV | Licenses</title>
</svelte:head>

<Header/>

<main class="m-9 flex flex-col gap-2">
  {#each licenties as licentie}
    <div class="record">
      <span class="w-72">{licentie.Naam}</span>
      <span class="w-24">{licentie.Prijs}</span>
    </div>
  {/each}
</main>
