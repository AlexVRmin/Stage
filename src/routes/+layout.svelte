<script>
// @ts-nocheck

  import "../app.css"
  import { onDestroy, onMount } from 'svelte';
  import { navigating } from '$app/stores';

  
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }


  function enableScroll() {
    document.body.style.overflow = '';
  }


  let unsubscribeNavigating;

  onMount(() => {
    unsubscribeNavigating = navigating.subscribe(value => {
      if (value) {
        disableScroll(); 
      } else {
        enableScroll(); 
      }
    });
  });

  onDestroy(() => {
    if (unsubscribeNavigating) {
      unsubscribeNavigating();
    }
  });
</script>


{#if $navigating}
  <style>
    .header {
      display:none;
    }
  </style>
  <div class="z-10 w-100 h-screen flex justify-center align-center test">
    <div class="load"></div>
  </div>
{/if}

<slot />
