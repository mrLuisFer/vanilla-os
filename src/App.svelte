<script lang="ts">
  import Header from './components/common/Header.svelte';

  let name: string = 'Svelte';
</script>

<main>
  <Header />
  <p>{name}</p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
