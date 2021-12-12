<script lang="ts">
  export let name: string;
  export let password: string;
</script>

<div>
  <p>Login</p>
  <p>{name}</p>
  <p>{password}</p>
  <input type="text" bind:value={name} />
  <input type="password" bind:value={password}/>
</div>

<style>
</style>

