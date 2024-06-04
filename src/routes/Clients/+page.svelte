<script>
  import Header from "../../components/Header.svelte";
  import { writable, get } from 'svelte/store'

  // Volgorde van sortering zetten
  // @ts-ignore
  export let data;
  let scholen = writable([...data.School]);
  let zoekterm = '';
  let sortVolgorde = {
    Naam: 1,
    Stad: 1,
    Admin: 1,
    Schoolgroep: 1,
    Master: 1
  };

  $: sckool = $scholen;

  // Volgorde van sortering aanpassen
  // @ts-ignore
  function volgorde(veld) {
    // @ts-ignore
    sortVolgorde[veld] *= -1;
    // @ts-ignore
    return sortVolgorde[veld];
  }

  // Sorteren
  // @ts-ignore
  function sorteren(veld, vergelijkFunctie) {
    scholen.update(sckolen => [...sckolen].sort(vergelijkFunctie));
  }

  // Per catergorie sorteren
  function Naam() {
    const sortVolgorde = volgorde('Naam');
    // @ts-ignore
    sorteren('Naam', (a, b) => a.Naam.localeCompare(b.Naam) * sortVolgorde);
  }

  function Stad() {
    const sortVolgorde = volgorde('Stad');
    // @ts-ignore
    sorteren('Stad', (a, b) => a.Stad.localeCompare(b.Stad) * sortVolgorde);
  }

  function Admin() {
    const sortVolgorde = volgorde('Admin');
    // @ts-ignore
    sorteren('Admin', (a, b) => a.Admin.localeCompare(b.Admin) * sortVolgorde);
  }

  function Groep() {
    const sortVolgorde = volgorde('Schoolgroep');
    // @ts-ignore
    sorteren('Schoolgroep', (a, b) => (a.Schoolgroep ?? '').localeCompare(b.Schoolgroep ?? '') * sortVolgorde);
  }

  function Master() {
    const sortVolgorde = volgorde('Master');
    // @ts-ignore
    sorteren('Master', (a, b) => (a.Master - b.Master) * sortVolgorde);
  }

  function Telefoon() {
    const sortVolgorde = volgorde('Telefoon');
    // @ts-ignore
    sorteren('Telefoon', (a, b) => (a.Telefoon - b.Telefoon) * sortVolgorde);
  }

  function Email() {
    const sortVolgorde = volgorde('Email');
    // @ts-ignore
    sorteren('Email', (a, b) => a.Email.localeCompare(b.Email) * sortVolgorde);
  }

  // Searchbar
  function zoekKlanten() {
    const dataArray = get(writable([...data.School]));
    const filteredData = dataArray.filter(school => 
      school.Naam.toLowerCase().includes(zoekterm.toLowerCase()) ||
      school.Stad.toLowerCase().includes(zoekterm.toLowerCase()) ||
      school.Admin.toLowerCase().includes(zoekterm.toLowerCase()) ||
      (school.Schoolgroep && school.Schoolgroep.toLowerCase().includes(zoekterm.toLowerCase())) ||
      school.Master.toString().includes(zoekterm)
    );

    scholen.set(filteredData);
  }

  // Updater voor Searchbar
  // @ts-ignore
  function handleSearch(event) {
    zoekterm = event.target.value.trim();
    zoekKlanten();

  //Reset als er niks staat
  if (zoekterm === '') {
    scholen.set(data.School);
  }
}

let arrowDirection = "M12.707 3.636a1 1 0 0 0-1.414 0L5.636 9.293a1 1 0 1 0 1.414 1.414L11 6.757V20a1 1 0 1 0 2 0V6.757l3.95 3.95a1 1 0 0 0 1.414-1.414z";

  function toggleArrow() {
    arrowDirection = arrowDirection === "M12.707 3.636a1 1 0 0 0-1.414 0L5.636 9.293a1 1 0 1 0 1.414 1.414L11 6.757V20a1 1 0 1 0 2 0V6.757l3.95 3.95a1 1 0 0 0 1.414-1.414z" ? "M12.707 20.364a1 1 0 0 1-1.414 0L5.636 14.707a1 1 0 1 1 1.414-1.414L11 17.243v-13a1 1 0 1 1 2 0v13l3.95-3.95a1 1 0 1 1 1.414 1.414l-6.364 6.364z" : "M12.707 3.636a1 1 0 0 0-1.414 0L5.636 9.293a1 1 0 1 0 1.414 1.414L11 6.757V20a1 1 0 1 0 2 0V6.757l3.95 3.95a1 1 0 0 0 1.414-1.414z";
  }

</script>

<svelte:head>
	<title>EDU-TECH BV | Client overview</title>
</svelte:head>


<Header/>
<div class="px-9 py-4 bg-white">

  <div class="flex justify-between">
      
    <form>

      <div class="search">

        <span class="search-icon">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="black" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37" />
          </svg>

        </span>

        <input class="search-input" type="search" placeholder="Search ..." on:input={handleSearch}>

      </div>

    </form>

    <div class="flex items-center">

      
      <div>
        <span>Total Clients:</span>
        <span class="border-solid border-2x1 rounded-xl bg-edutech-orange px-2 py-0.5 text-white">{data.Count}</span>
      </div>

      
    </div>

  </div>

</div>

<main class="m-9 flex flex-col gap-2">
  <section class="border-solid border-2 border-gray-500 rounded-lg flex px-12 mb-8">
    <button class="w-48 cursor-pointer flex items-center" on:click={toggleArrow} on:click={Naam}>Name
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
        <g fill="none">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path fill="black" d="{arrowDirection}" />
        </g>
      </svg>
    </button>


    <button class="w-20 cursor-pointer flex items-center" on:click={toggleArrow} on:click={Stad}>City
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
        <g fill="none">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path fill="black" d="{arrowDirection}  " />
        </g>
      </svg>
    </button>


    <button class="w-40 cursor-pointer" on:click={Admin}>Primary</button>
    <button class="w-48 cursor-pointer" on:click={Master}>Master</button>
    <button class="w-72 cursor-pointer" on:click={Groep}>Schoolgroup</button>
    <button class="w-72 cursor-pointer" on:click={Telefoon}>Phone</button>  
    <button class="w-72 cursor-pointer" on:click={Email}>Email</button>
    
  </section>


  {#each sckool as school}
    <div class="record">

      <span class="w-48">{school.Naam}</span>
      <span class="w-24">{school.Stad}</span>
      <span class="w-40">{school.Voornaam} {school.Admin}</span>
      <!--Master bepalen-->
      {#if school.Master == 1}
        <span class="w-48">5799353</span>
      {:else}
        <span class="w-48">8135865</span>
      {/if}
      <!--Zien of er een schoolgroep is of niet-->
      {#if school.Schoolgroep}
        <span class="w-72">{school.Schoolgroep}</span>
      {:else}
        <span class="w-72">Geen Schoolgroep</span>
      {/if}
      <span class="w-40">{school.Telefoonnummer}</span>
      <span class="w-40">{school.Email}</span>
      
      <a href={`/Single/${school.PKschool}`}><button class="px-4 py-0.5 bg-edutech-orange rounded-2xl">View</button></a>
    </div>
  {/each}

</main>

  
