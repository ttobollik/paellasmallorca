<script>
  import Header from './components/Header.svelte';
  import '../app.css'; // Adjust path if needed
</script>

<Header />

<main class="p-8">
  <slot /> <!-- Page content -->
</main>
