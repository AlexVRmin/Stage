<script>
  import Header from "../components/Header.svelte";
  export let data;
</script>

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

        <input class="search-input" type="search" placeholder="Search ...">

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

    <span class="w-48">Name</span>
    <span class="w-52">Adress</span>
    <span class="w-24">PC</span>
    <span class="w-24">City</span>
    <span class="w-40">Primary</span>
    <span class="w-72">Primary email</span>
    <span class="w-48">Technical</span>
    <span class="w-72">Technical email</span>
    <span class="w-40">Phone</span>

  </section>


  {#each data.School as School}
    <div class="record">
      
        <span class="w-48">Sancta Maria Leuven</span>
        <span class="w-52">Avenue de la source {School.Huisnummer}</span>
        <span class="w-24">3000</span>
        <span class="w-24">Leuven</span>
        <span class="w-40">Jos d'hooge</span>
        <span class="w-72">Jos@wiebel.be</span>
        <span class="w-48">Jan Vanwalleghem</span>
        <span class="w-72">gill.vandenbroeck@min.ksleuven.be</span>
        <span class="w-40">+32 471 87 26 50</span>
      
      <button class="px-4 py-0.5 bg-edutech-orange rounded-2xl">View</button>
    </div>
  {/each}

</main>

  
