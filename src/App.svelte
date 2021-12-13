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
</main>

<style lang="scss" global>
  :root {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    // Nord Palette
    --polar-night-0: #2e3440;
    --polar-night-1: #3b4252;
    --polar-night-2: #434c5e;
    --polar-night-3: #4C566A;

    --snow-storm-0: #D8DEE9;
    --snow-storm-1: #E5E9F0;
    --snow-storm-2: #ECEFF4;

    --frost-0: #8FBCBB;
    --frost-1: #88C0D0;
    --frost-2: #81A1C1;
    --frost-3: #5E81AC;

    --aurora-red: #BF616A;
    --aurora-orange: #D08770;
    --aurora-yellow: #EBCB8B;
    --aurora-green: #A3BE8C;
    --aurora-purple: #B48EAD;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
		margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
</style>
