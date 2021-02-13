<script>
  import Article from "$components/Article.svelte";
  import Code from "$components/Code.svelte";
</script>

<Article
  title="Postgres in Go: What driver to use?"
  description="Comparing pgx, lib/pq, and pgx via database/sql"
>
  <p>
    So you're about to create a new Go project that requires Postgres. There are 3 ways of doing that:
  </p>

  <ul>
    <li>🔴 Via <Code inline value="database/sql"/> and the pq driver</li>
    <li>🟡 Via <Code inline value="database/sql"/> and the pgx driver</li>
    <li>🟢 Via pgx</li>
  </ul>
  
  <h2>You (probably) shouldn't use pq</h2>
  Although this is the most popular driver at the moment, the maintainers themselves recommend that you use pgx as pq is no longer actively maintained: 
  <blockquote style="font-size: 1rem; color: var(--app-c-alt)">
    We recommend using pgx which is actively maintained.
  </blockquote>
  PGX also claims to be faster than pq. I'm not going to go in-depth about the performance comparison between these two, but you should check out <a target="_blank" rel="noopener" href="https://devandchill.com/posts/2020/05/go-lib/pq-or-pgx-which-performs-better/">this comparison</a>.

  <h2>pgx via <Code inline value="database/sql" /> or not?</h2>
  <p>
    TODO:
    automatically prepared statements (and when prepared statements matter)
    extra types
    sqlx
    pggen?
    https://thoughtbot.com/blog/advanced-postgres-performance-tips
  </p>
</Article>
