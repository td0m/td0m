<script lang="ts">
  import Layout from "./Layout.svelte";
import SignUp from "./SignUp.svelte";

  export let title: string;
  export let description: string;
  // export let date: Date;
</script>

<svelte:head>
  <title>{title} - Dominik Tarnowski</title>
  <meta name="description" content={description} />
</svelte:head>

<Layout>
  <h1>{title}</h1>
  <h2 class="description">{description}</h2>

  <div class="content">
    <slot />
  </div>

  <div class="spacer" />
  <div class="divider" />
  <SignUp />
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

</style>
