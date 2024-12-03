<script>
  export let title;
  export let description;
  export let image;
  export let link;
</script>

<section class="mb-8 p-4 border rounded-lg shadow">
  <h2 class="text-xl font-semibold mb-2">{title}</h2>
  <p class="text-gray-700 mb-4">{description}</p>
  <a href={link} class="text-blue-500 hover:underline font-medium">Read More</a>
  <img src={image} alt={title} class="mt-4 w-full h-auto rounded" />
</section>
