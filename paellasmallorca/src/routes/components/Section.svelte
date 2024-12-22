<script>
  export let title;
  export let description;
  export let image;
  export let link;
  import { base } from '$app/paths';
</script>


<section class="mb-8 p-4 border rounded-lg shadow flex flex-col items-center text-center">
  <img src={`${base}/${image}`} alt={title} class="mt-4 w-full h-[200px] object-cover rounded" />
  <h2 class="text-xl font-semibold my-2">{title}</h2>
  <p class="text-gray-700 mb-4">{description}</p>
  <a 
    href={`${base}/${link}`}
    class="bg-teal-500 text-white py-2 px-4 w-full rounded hover:bg-teal-600 focus:ring focus:ring-teal-300 font-medium transition-all duration-200"
  >
    Learn More
  </a>
</section>