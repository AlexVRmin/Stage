<script>
  import { supabase } from "$lib/supabaseClient";
  import Header from "../../../components/Header.svelte";

    // @ts-ignore
  export async function load({ params }) {
    const { data, error } = await supabase
      .from("School")
      .select("*")
      .eq("PKschool", params.id)
      .single();

    if (error || !data) {
      return {
        status: 404,
        error: new Error(`School with ID ${params.id} not found`),
      };
    }

    return {
      props: {
        school: data,
      },
    };
  }

  // @ts-ignore
  export let data;
  let school = data.school;
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
      <span class="border-solid border-2x1 rounded-xl bg-edutech-orange px-2 py-0.5 text-white">8</span>
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
          <h3>Schoolgroep</h3>
          <span>
            {#if school.Schoolgroep}
              <span class="w-72">{school.Schoolgroep}</span>
            {:else}
              <span class="w-72">Geen Schoolgroep</span>
            {/if}
          </span>
        </div>
      </div>

    </aside>

    <section class="w-3/4">

      <h2 class="text-2xl">Contracts</h2>

      <div class="bg-white px-9 py-4">
        <p class="record">test</p>
      </div>

    </section>

  </section>

</main>