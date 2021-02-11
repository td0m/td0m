<script lang="ts">
  export let lang: string;
  export let value: string;
  export let inline: boolean = false;
</script>

{#if !inline}
<pre>
  <code class="lang-{lang}">{value}</code>
</pre>
{:else}
  <code class="lang-{lang}">{value}</code>
{/if}