<script>
  import Section from './components/Section.svelte';
  import { sections } from '$lib/content.js';
  import { base } from '$app/paths';
  export const prerender = true;
</script>

<div class="flex justify-center my-4">
  <img src="{base}/images/LogoFullLg.png" alt="Paella Experience Logo" class="h-48" />
</div>


<div class="flex flex-wrap items-start w-full">
  {#each sections as section}
    <div class="w-full md:w-1/3">
      <Section {...section} />
    </div>
  {/each}
</div>