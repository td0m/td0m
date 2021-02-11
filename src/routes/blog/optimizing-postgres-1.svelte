<script>
  import Article from "$components/Article.svelte";
  import Code from "$components/Code.svelte";

  const create = `CREATE TABLE device(
  mac MACADDR PRIMARY KEY,
  name TEXT
)`;

  const insertIndividually = `for _, d := range devices {
  db.Exec(ctx, \`INSERT INTO device(mac,name) VALUES($1,$2)\`, d.Mac, d.Name))
}`;

  const insertTx = `tx, _ := db.Begin(ctx)
for _, d := range devices {
  tx.Exec(ctx, \`INSERT INTO device(mac,name) VALUES($1,$2)\`, d.Mac, d.Name)
}
tx.Commit(ctx)
`;

  const insertBatch = `batch := &pgx.Batch{}
for _, d := range devices {
  batch.Queue(\`INSERT INTO device(mac,name) VALUES($1,$2)\`, d.Mac, d.Name)
}
br := db.SendBatch(ctx, batch)
for range devices {
  br.Exec()
}
br.Close()
`;
</script>

<Article
  title="Optimizing Postgres: Batching"
  description="Performance lesson #1: Avoid network trips"
>
  <p>
    There is more to postgres performance than using the <Code
      inline
      lang="sql"
      value="EXPLAIN"
    /> statement. I ran benchmarks to investigate when you should start batching
    your queries.
  </p>
  <h2>My hardware</h2>
  <p>
    The tests were performed on i7-9750H (Laptop CPU) with 16GB of RAM on Fedora
    33 and Postgres 13. It shouldn't make much of a difference if you executed
    the benchmarks on a different machine.
  </p>
  <p>
    In this case, only the time to make the network request and receive a
    response will count, so if your postgres database is hosted on a different
    network with higher latency the differences will be even more extreme.
  </p>
  <h2>The problem</h2>
  <p>Consider the following schema:</p>
  <Code lang="sql" value={create} />
  <p>
    Let's say you have 1,000 devices in some CSV file. How would you insert
    these rows? Well, there are 3 ways:
  </p>

  <h3>(Never) Individually</h3>
  <p>
    Each insert will cause yet another network request to the server, which will
    be even worse than in the below benchmarks if hosted on a different
    server/network.
  </p>
  <Code lang="go" value={insertIndividually} />

  <h3>(Maybe) Transactions</h3>
  <p>
    Considerably faster than individual inserts, however, you should use batch
    unless you need any transaction-specific features.
  </p>
  <Code lang="go" value={insertTx} />

  <h3>(Prefered) Batch</h3>
  <p>
    This is a <a href="https://github.com/jackc/pgx">pgx</a> specific feature that pretty much concatenates your queries
    and allows you to execute and query them separately.
  </p>
  <Code lang="go" value={insertBatch} />

  <h2>Benchmarks</h2>
  <p>
    You will rarely have to insert a thousand rows, but when should you start
    batching / using transactions?
  </p>

  <h3>1 query</h3>
  <p>
    As you can see, it does not make any difference what method we use when we
    only insert a single row:
  </p>
  <div class="bars" style="--max: 10" data-label="1ms">
    <div style="--v: 10">Individually</div>
    <div style="--v: 10">Transactions</div>
    <div style="--v: 10">Batch</div>
  </div>

  <h3>3 queries</h3>
  <p>
    There is some benefit to using transactions and batched queries when you
    have 2 or 3 queries to execute.
  </p>
  <div class="bars" style="--max: 6" data-label="1ms">
    <div style="--v: 6">Individually</div>
    <div style="--v: 1.1">Transactions</div>
    <div style="--v: 0.8">Batch</div>
  </div>

  <p>
    Note that somehow the transaction time per individual query went down. This
    left me confused and thinking my benchmark must be wrong, but it seems
    Postgres must somehow optimize execution time when queries are sent within a
    short time frame of each other. It could also be pgx's feature of automatically preparing SQL statements.
  </p>

  <h3>1000+ queries</h3>

  <p>
    As you'd expect, the difference per 1,000+ queries is ever larger.
    Eventually, if we increased the number of queries, the network time will
    become pretty much negligible and we will approach the raw time taken by
    Postgres to execute the given query.
  </p>

  <div class="bars" style="--max: 6" data-label="1ms">
    <div style="--v: 6">Individually</div>
    <div style="--v: 0.07">Transactions</div>
    <div style="--v: 0.01">Batch</div>
  </div>
</Article>
