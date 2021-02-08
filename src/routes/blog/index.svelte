<script>
  import ArticleLink from "$components/ArticleLink.svelte";
  import Layout from "$components/Layout.svelte";

  const articles = [
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
