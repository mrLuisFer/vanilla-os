import App from "./App.svelte";
const appElement = document.getElementById("app");

const svelteApp = new App({
  target: appElement,
});

export default svelteApp;
