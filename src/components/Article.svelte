<script lang="ts">
  import { onMount } from "svelte";

  import Layout from "./Layout.svelte";

  export let title: string;
  export let description: string;
  // export let date: Date;

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
  <title>{title} - Dominik Tarnowski</title>
  <meta name="description" content={description} />

  <link rel="preload" href="/prism.css" as="style" on:load={onLoad} />
  <noscript>
    <link rel="stylesheet" href="/prism.css" />
  </noscript>
</svelte:head>

<Layout>
  <h1>{title}</h1>
  <h2 class="description">{description}</h2>

  <div class="content">
    <slot />
  </div>

  <div class="spacer" />
  <div class="divider" />
  <h2 style="margin-bottom: 0;">Subscribe</h2>
  <p style="margin: 0 0 15px">
    Get notified when I release new articles. No spam.
  </p>

  <div class="flex">
    <div class="card" />
    <div class="card">Subscribe</div>
  </div>
</Layout>

<style>
  /* .content {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  } */

  h1 {
    margin-bottom: 0;
    font-weight: 400;
  }
  h2 {
    font-weight: 400;
  }
  .description {
    margin-top: 0;
    margin-bottom: 3rem;
    color: var(--app-c-alt);
    font-size: 1.2rem;
  }

  .spacer {
    height: 3rem;
  }
  .divider {
    width: 100%;
    height: 2px;
    background-color: rgba(var(--t), var(--t), var(--t), 0.1);
  }

  .flex {
    display: flex;
  }
  .flex > * {
    flex-grow: 1;
  }
  .flex > *:first-child {
    flex-grow: 15;
  }

  .card {
    border-radius: 8px;
    background-color: rgba(var(--t), var(--t), var(--t), 0.07);
    box-sizing: border-box;
    height: 40px;
    margin-right: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: var(--c-link);
    text-transform: uppercase;
  }
</style>
