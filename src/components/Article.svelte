<script lang="ts">
  import Layout from "./Layout.svelte";

  export let title: string;
  export let description: string;
  // export let date: Date;
</script>

<Layout>
  <h1>{title}</h1>
  <h2 class="description">{description}</h2>

  <slot />

  <div class="spacer" />
  <div class="divider" />
  <h2 style="margin-bottom: 0;">Subscribe</h2>
  <p style="margin: 0 0 15px">Get notified when I release new articles. No spam.  </p>

  <div class="flex">
    <div class="card" />
    <div class="card">
      Subscribe
    </div>
  </div>
</Layout>

<style>
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
    font-size: 1.0rem;
    color: var(--c-link);
    text-transform: uppercase;
  }
</style>
