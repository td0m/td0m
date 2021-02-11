<script lang="ts">
  export let lang: string;
  export let inline: boolean = false;
</script>

{#if !inline}
<pre>
  <code class="lang-{lang}"><slot /></code>
</pre>
{:else}
  <code class="lang-{lang}"><slot /></code>
{/if}