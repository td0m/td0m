<script>
  import ArticleLink from "$components/ArticleLink.svelte";
  import Layout from "$components/Layout.svelte";

  const articles = [
    {
      date: new Date("2021-02-08"),
      url: "/blog/css-charts",
      title: "Pure CSS Charts",
      description: "You don't need a large library to render basic charts",
    },
    {
      date: new Date("2021-02-11"),
      url: "/blog/optimizing-postgres-1",
      title: "Optimizing Postgres: Batching",
      description: "Performance lesson #1: Avoid network trips",
    },
    {
      date: new Date("2021-02-08"),
      url: "/blog/my-new-blog",
      title: "My New Blog",
      description: "I'm leaving Medium and this is my new blog.",
    },
  ];
</script>

<svelte:head>
  <title>Dominik Tarnowski's blog</title>
  <meta name="description" content="Writing about software." />
</svelte:head>

<Layout>
  <h2>Blog</h2>
  {#each articles as article}
    <ArticleLink {...article} />
  {/each}
</Layout>
