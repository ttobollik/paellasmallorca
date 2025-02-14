<script>
  export let title;
  export let description;
  export let image;
  import { base } from '$app/paths';

  let showDescription = false;

  function toggleDescription() {
    showDescription = !showDescription;
  }
</script>

<section class="p-4 m-4 border rounded-lg shadow flex flex-col items-center text-center transition-all duration-200">
  <img src={`${base}/${image}`} alt={title} class="mt-4 w-full h-[200px] object-cover rounded" />

  <button 
    on:click={toggleDescription}
    class="bg-teal-500 text-white py-2 my-4 px-4 w-full rounded hover:bg-teal-600 focus:ring focus:ring-teal-300 font-medium transition-all duration-200"
  >
    {title}
  </button>

  <div class="overflow-hidden transition-all duration-300" class:!hidden={!showDescription}>
    <p class="text-gray-700 mt-2">{description}</p>
  </div>
</section>
