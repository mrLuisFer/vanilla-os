<script lang="ts">
  import Header from "./components/common/header/Header.svelte";
  import Login from "./pages/Login.svelte";
  import Home from "./pages/Home.svelte";

  let name: string = "";
  let password: string = "";
</script>

<main>
  <Header />
  {#if name && name.length > 0}
    <Home />
  {:else}
    <Login bind:name bind:password />
  {/if}
</main>

<style lang="scss" global>
  :root {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-size: 16px;
    // Nord Palette
    --polar-night-0: #2e3440;
    --polar-night-1: #3b4252;
    --polar-night-2: #434c5e;
    --polar-night-3: #4c566a;

    --snow-storm-0: #d8dee9;
    --snow-storm-1: #e5e9f0;
    --snow-storm-2: #eceff4;

    --frost-0: #8fbcbb;
    --frost-1: #88c0d0;
    --frost-2: #81a1c1;
    --frost-3: #5e81ac;

    --aurora-red: #bf616a;
    --aurora-orange: #d08770;
    --aurora-yellow: #ebcb8b;
    --aurora-green: #a3be8c;
    --aurora-purple: #b48ead;
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
    font-family: "Roboto", sans-serif;
  }
</style>
