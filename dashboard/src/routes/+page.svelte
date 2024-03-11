{@html '<!--What hier geschreven is, is een voorbeeld-->'}
<script>
    export let data;
  </script>

  <ul>
    {#each data.naam_tabel as tabel}
      <li>{tabel.name}</li>
    {/each}
  </ul>