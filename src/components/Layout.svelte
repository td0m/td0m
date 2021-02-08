<script>
import Footer from "./Footer.svelte";
import Nav from "./Nav.svelte";
</script>

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