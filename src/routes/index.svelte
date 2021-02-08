<script>
	import Layout from "$components/Layout.svelte";
</script>

<svelte:head>
	<title>Dominik Tarnowski</title>
	<meta
		name="description"
		content="Computer Science Student and Software Developer."
	/>
</svelte:head>

<Layout>
	<h1>Dominik Tarnowski</h1>
	<p>
		I'm a 19 year old Computer Science student at the <a
			href="https://southampton.ac.uk">Uni of Southampton</a
		>, England.
	</p>

	<p>Interested in DevOps, databases, and ML. Enthusiastic about Go.</p>

	<p>
		Working part time at <a
			rel="noopener"
			target="_blank"
			href="https://troudigital.com">TrouDigital</a
		>. <br />
		Building fun projects on <a href="https://github.com/td0m">GitHub</a>.
		<br />
		Writing about software on <a href="/blog">my blog</a>.
	</p>

	<p>I like simplicity.</p>
</Layout>

<style>
	h1 {
		font-weight: 700;
		font-size: clamp(2.8rem, 8vw, 3.5rem);
	}
</style>
