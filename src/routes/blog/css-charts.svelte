<script>
  import Article from "$components/Article.svelte";
  import Code from "$components/Code.svelte";

  let example1 = `<div class="bars" style="--max: 86">
  <div style="--v: 86; --l: '86%'">Rust</div>
  <div style="--v: 67; --l: '67%'">TS</div>
  <div style="--v: 66; --l: '66%'">Python</div>
  <div style="--v: 63; --l: '63%'">Kotlin</div>
  <div style="--v: 62; --l: '62%'">Go</div>
  <div style="--v: 62; --l: '62%'">Julia</div>
  <div style="--v: 62; --l: '62%'">Dart</div>
  <div style="--v: 52; --l: '52%'">Haskell</div>
  <div style="--v: 44; --l: '44%'">Java</div>
</div>`;

  const cssLink = `<link rel="stylesheet" href="" />`;
</script>

<Article
  title="Pure CSS Charts"
  description="You don't need a large library to render basic charts"
>
  <h2>Motivation</h2>
  <p>When building my personal blog, I came across a problem.</p>
  <p>
    I needed to display a bar chart. Simple problem, right? I can think of 2
    ways of doing it:
  </p>
  <ul>
    <li>draw in Google Spreadsheets and insert the image</li>
    <li>import a large canvas-based chart drawing library</li>
  </ul>
  <p>
    I didn't want to bother with opening Google Spreadsheets, generating a bar
    chart, screenshotting it, pasting the image here... It was a cumbersome
    process, not to mention it would lead to problems with theming.
  </p>

  <p>
    I realised that I didn't need a large canvas library to draw some of the
    basic charts I wanted, so I opted for creating my own simple library.
  </p>

  <h2>Example</h2>
  <Code lang="html" value={example1} />
  <p>Will display:</p>
  <div contenteditable="false" bind:innerHTML={example1} />

  <h2>Advantages</h2>
  <ul>
    <li>Easy to use</li>
    <li>Extremely small</li>
    <li>Extremely fast 🚀</li>
    <li>Mobile friendly (scrollable)</li>
  </ul>
  <h2>Disadvantages</h2>
  <ul>
    <li>Requires CSS Variables (won't work in IE)</li>
    <li>Only supports basic charts</li>
  </ul>

  <h2>Usage</h2>
  TODO: this
  <Code lang="html" value={cssLink} />
  TODO: link to github page
</Article>

<style>
</style>
