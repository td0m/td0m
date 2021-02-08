<script lang="ts">
  import dayjs from "dayjs";

  export let url: string;
  export let title: string;
  export let description: string;
  export let date: Date;

  $: at = dayjs(date).format("MMM D, YYYY");
</script>

<div class="row">
  <time>{at}</time>
  <div>
    <a href={url}>{title}</a>
    <div>{description}</div>
  </div>
</div>

<style>
  .row {
    display: flex;
    align-items: center;
    margin: 12px 0;
  }

  .row time {
    min-width: 9em;
    color: var(--app-c-alt);
  }

  .row div a {
    color: var(--c-link);
    font-size: 1.2rem;
  }

  .row div div {
    font-size: 0.9rem;
    margin-top: 5px;
    color: var(--app-c-alt);
  }
</style>
