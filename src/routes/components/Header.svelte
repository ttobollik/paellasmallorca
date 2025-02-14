
<script>
  import { base } from '$app/paths';
</script>

<header class="bg-gray-100 shadow p-4">
  <nav class="flex justify-between items-center">
    <!-- Left side: Navigation Links -->
    <ul class="hidden md:flex space-x-4">
      <li><a href="{base}/" class="text-gray-700 hover:text-blue-500">Home</a></li>
      <li><a href="{base}/contact" class="text-gray-700 hover:text-blue-500">Contact</a></li>
      <li><a href="{base}/gallery" class="text-gray-700 hover:text-blue-500">Gallery</a></li>
    </ul>

    <!-- Mobile: Burger Menu -->
    <button class="block md:hidden text-gray-700 focus:outline-none" aria-label="Open navigation menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Right side: Book Now Button -->
    <a
      href="{base}/"
      class="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 font-medium transition-all duration-200"
    >
      Book Now
    </a>
  </nav>
</header>
