<script lang="ts">
  export let name: string;
  export let password: string;

  let inputUsernameRef: HTMLInputElement;
  let inputPasswordRef: HTMLInputElement;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    name = inputUsernameRef.value.trim();
    password = inputPasswordRef.value.trim();
  };
</script>

<section>
  <p>Login</p>
  <form on:submit="{handleSubmit}">
    <input
      type="text"
      placeholder="Insert username"
      bind:this="{inputUsernameRef}"
      required
    />
    <input
      type="password"
      placeholder="Insert Password"
      bind:this="{inputPasswordRef}"
      required
    />
    <button type="submit">Login</button>
  </form>
</section>

<style>
</style>
