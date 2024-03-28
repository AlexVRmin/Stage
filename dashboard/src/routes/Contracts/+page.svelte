<script>
    import Header from "../../components/Header.svelte"
  </script>
  
<Header/>



<div class="px-9 py-4 bg-white">

    <div class="flex justify-between items-center">
        
      <form>
  
        <div class="search">
  
          <span class="search-icon">
  
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="black" d="m19.645 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37" />
            </svg>
  
          </span>
  
          <input class="search-input" type="search" placeholder="Search ...">
  
        </div>
  
      </form>

      
      <div>
        <span>Total contracts:</span>
        <span class="border-solid border-2x1 rounded-xl bg-edutech-orange px-2 py-0.5 text-white">8</span>
      </div>
  
    </div>
  
</div>

<main class="m-9 flex flex-col gap-2">

    <section class="border-solid flex border-2 border-gray-500 rounded-lg px-12 mb-8">
        
      <span class="w-64">Nummer</span>
      <span class="w-64">Status</span>
      <span class="w-64">PCN</span>
      <span class="w-56">Startdate</span>
      <span class="w-56">License amount</span>
      <span class="w-56">Free licenses</span>
      <span class="w-56">Total price</span>

    </section>

    <div class="record">

        <span class="w-64">65014612</span>
        <span class="w-64 active">ACTIVE</span>
        <span class="w-64">658AH0021</span>
        <span class="w-56">1 OCTOBER </span>
        <span class="w-56">2</span>
        <span class="w-56">100</span>
        <span class="w-56">€ 7999</span>

        <button class="px-4 py-0.5 bg-edutech-orange rounded-2xl">View</button>

    </div>
</main>

