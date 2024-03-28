<script>
  import Header from "../../components/Header.svelte";
</script>

<Header/>

<main class="m-9">

<section class="flex justify-between items-center bg-white px-9 py-4 mb-8">

  <div>
    <h1 class="text-3xl">Miniemeninstituut</h1>
    <p>Diestsestraat 63, 3000 Leuven</p>
  </div>

  <div>
    <span>Total orders:</span>
    <span class="border-solid border-2x1 rounded-xl bg-edutech-orange px-2 py-0.5 text-white">8</span>
  </div>

</section>

<section class="flex justify-between">

  <aside class="w-1/5">

    <h2 class="text-2xl pl-9">Contact</h2>

    <div class="bg-white px-9 py-4 flex flex-col gap-6">

      <div>
        <h3>Phone number</h3>
        <span>+32 471 87 25 91</span>
      </div>
      
      <div>
        <h3>Primary (Signature)</h3>
        <span>Greet Cauwenberghs</span>
      </div>

      <div>
        <h3>Primary Email</h3>
        <span>greet.cauwenberghs@mis.ksleuven.be</span>
      </div>

      <div>
        <h3>Technical (Admin)</h3>
        <span>Born vandegaer</span>
      </div>

      <div>
        <h3>Technical Email</h3>
        <span>bjorn.vandegaer@min.ksleuven.be</span>
      </div>
    </div>

  </aside>

  <section class="w-3/4">

    <h2 class="text-2xl">Contracts</h2>

    <div class="bg-white px-9 py-4">
      <p class="record">test</p>
      <a class="px-4 py-0.5 bg-edutech-orange rounded-2xl" href={`/Licences/`}>View</a>  <!--style-->
    </div>


  </section>

</section>

</main>