<script>
  import Header from './components/Header.svelte';
  import '../app.css'; // Adjust path if needed
</script>

<Header />

<main class="px-8 py-2">
  <slot /> <!-- Page content -->
</main>
