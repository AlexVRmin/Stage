<script>
  // @ts-nocheck
  import Header from "../../../components/Header.svelte";
  
  export let data;
  let school = data.school;
  let contract = school.Contract;
</script>
    
<Header/>

<main class="m-9">
  <section class="flex justify-between items-center bg-white px-9 py-4 mb-8">
    <div>
      <h1 class="text-3xl">{school.Naam}</h1>
      <p>{school.Straat} {school.Huisnummer}, {school.Postcode} {school.Stad}</p>
    </div>
    <div>
      <span>Total orders:</span>
      <span class="border-solid border-2x1 rounded-xl bg-edutech-orange px-2 py-0.5 text-white">4</span>
    </div>
  </section>
  
  <section class="flex justify-between">
    <aside class="w-1/5">
      <h2 class="text-2xl pl-9">Contact</h2>
      <div class="bg-white px-9 py-4 flex flex-col gap-6">
        <div>
          <h3>Primary (Signature)</h3>
          <span>{school.Voornaam} {school.Admin}</span>
        </div>
        <div>
          <h3>Primary Email</h3>
          <span>{school.Email}</span>
        </div>
        <div>
          <h3>Master</h3>
          <span>
            {#if school.Master == 1}
              <span class="w-48">5799353</span>
            {:else}
              <span class="w-48">8135865</span>
            {/if}
          </span>
        </div>
        <div>
          <h3>Schoolgroup</h3>
          <span>
            {#if school.Schoolgroep}
              <span class="w-72">{school.Schoolgroep}</span>
            {:else}
              <span class="w-72">Geen schoolgroep</span>
            {/if}
          </span>
        </div>
      </div>
    </aside>
  
    <section class="w-3/4">
      <h2 class="text-2xl">Contracts</h2>
      <div class="bg-white px-9 py-4">
        {#each contract as contracten}
          <div class="record">
            <span class="w-48">{contracten.Naam}</span>
            <span class="w-40">{contracten.PCN}</span>
            <span class="w-40">{contracten.Startdatum}</span>
            <span class="w-40">{contracten.Einddatum}</span>
            <a class="px-4 py-0.5 bg-edutech-orange rounded-2xl" href={`/Licences/${contracten.PKcontract}`}>View</a>
          </div>
        {/each}
      </div>
    </section>
  </section>
</main>
