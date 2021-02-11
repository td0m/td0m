<script>
  import { onMount } from "svelte";
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";

  onMount(() => {
    // timeout to fix not loading when navigating from a different page in production
    setTimeout(() => import("$components/prism.js"), 200);
  });

  function onLoad() {
    this.onload = null;
    this.rel = "stylesheet";
  }
</script>

<svelte:head>
  <link rel="preload" href="/prism.css" as="style" on:load={onLoad} />
  <noscript>
    <link rel="stylesheet" href="/prism.css" />
  </noscript>
</svelte:head>

<main>
  <Nav />
  <div class="content">
    <slot />
  </div>
  <Footer />
</main>

<style>
  .content {
    min-height: 50vh;
  }
</style>
