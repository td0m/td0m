<script lang="ts">
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import "prismjs/components/prism-go";
  import "prismjs/components/prism-sql";
  import "prismjs/components/prism-bash";

  export let lang: string;
  export let value = "";
  export let inline: boolean = false;

  $: highlighter = Prism.languages[lang] || Prism.languages["js"];
  $: html = Prism.highlight(value, highlighter, lang);
</script>

{#if !inline}
  <pre><code class="lang-{lang}" contenteditable="false" bind:innerHTML={html} /></pre>
{:else}
  <code class="lang-{lang}" contenteditable="false" bind:innerHTML={html} />
{/if}
