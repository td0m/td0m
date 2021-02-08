<script>
  import Article from "$components/Article.svelte";

  const code = `package main

import "fmt"

// wassup bro
func main() {
  fmt.Println("")
}`;
</script>

<Article
  title="My New Blog"
  description="I'm leaving Medium and this is my new blog."
>
  <h1>1. Paywalls</h1>
  <p>
    People (especially on HN and Reddit) like to complain about the Medium
    paywall.
  </p>
  <img alt="Medium paywall" src="/blog/my-new-blog/paywall-medium.webp" />
  <p>
    But Medium isn't the only site with this revenue model. We live in the age
    of <b>AdBlock</b> where the ad revenue simply cannot bring enough money to justify
    spending a lot of time on writing well-researched content.
  </p>

  <p>
    We have this notion that content on the internet should be free, but "free"
    content still costs... the author's time and effort.
  </p>

  <p>
    I think ads are bad and I'm not going to put them here. They encourage
    clickbait and poor writing. They're also easy to bypass and drastically
    decrease user's overall experience by adding cluttered content and
    increasing load times.
  </p>

  <p>
    Many content creators (for example Veritasium on YouTube or The Pudding) opt
    for using Patreon as a secondary source of revenue. LiveWire shares
    screencasts of which some are free to watch, but some require a GitHub
    sponsorship. It works for them, so it might also work for me.
  </p>

  <h1>2. Traffic</h1>
  <p>
    Regardless of the article Medium always drives my traffic higher than it
    would've been if it was on my personal site.
  </p>
  <img alt="My Traffic on Medium" src="/blog/my-new-blog/traffic.webp" />

  <p>
    But I think there's much more to <b>traffic</b> than the numbers can tell us.
    Medium does not help that much with creating a community. It discourages you
    from following creators and encourages you to follow publications instead. It
    doesn't have a feed with people you follow, so there is no clear benefit to people
    following you.
  </p>

  <p>
    I'm hoping things will change by adding free email subscriptions to this
    blog.
  </p>

  <blockquote>What about SEO?</blockquote>

  <p>
    Positioning on Google is one of the biggest benefits of using Medium, and I
    will never beat it with my personal site.
  </p>

  <h1>3. Bad UX</h1>

  <p>
    There are a lot of things I don't like about Medium, but it mainly boils
    down to the homepage feed and syntax highlighting.
  </p>

  <p>Consider the following code snippet:</p>

  <pre><code class="language-go">{code}</code></pre>

  <p>
    It cost me about <code>50kb</code> to highlight this code. Although that's 5
    times more than a screenshot equivalent, that 50kb is cachable, meaning it only
    has to be downloaded ONCE.
  </p>

  <p>
    No, really. Medium doesn't have built-in code syntax highlighting, so every
    time you want to include a code snippet, you have to either:
  </p>

  <ul>
    <li>Make a screenshot</li>
    <li>Make a gist</li>
    <li>Settle on unhighlighted code snippets</li>
  </ul>

  <img alt="Medium paywall" src="/blog/my-new-blog/main-screenshot.webp" />

  <p>
    A screenshot is a bad experience for the reader, since if they intend on
    using that code they will be forced to type it instead of copying it. It
    also consumes more bandwidth than it should.
  </p>

  <img alt="Medium paywall" src="/blog/my-new-blog/main-gist.webp" />
  <p>
    Gists require the writer to add (and maintain) those gists. This can get
    troublesome later on if you change your GitHub account login, all the gist
    links will become invalid. Not to mention, I don't like having hundreds of
    gist snippets from different tutorials and code that looks out of place (as
    themes don't match up).
  </p>

  <p>Unhighlighted code is not something I'm willing to settle on.</p>

  <h1>A hybrid solution</h1>
  <p>
    I've come to the conclusion that for now I'm not going to be completely
    leaving Medium. Instead, I'm going to publish the same articles on Medium
    but promote this site instead. Why? I simply don't have a large enough of a
    following yet to make enough money to justify spending my time writing
    stuff.
  </p>
  <p>
    Over the next few months I'm going to be incrementally working on this blog.
  </p>
  <ul>
    <li>Analytics</li>
    <li>Code Syntax Highlighting</li>
    <li>Email subscription</li>
    <li>Comments</li>
  </ul>
</Article>
