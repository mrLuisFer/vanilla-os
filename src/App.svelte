<script lang="ts">
  import Header from './components/common/Header.svelte';
  import Login from './pages/Login.svelte';
  import Home from './pages/Home.svelte';

  let name: string = "";
  let password: string = "";

</script>

<main>
  <Header />
  {#if name && name.length > 0}
    <Home />
  {:else}
    <Login bind:name={name} bind:password={password} />
  {/if}
  <p>{name}</p>
  <p>{password}</p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
