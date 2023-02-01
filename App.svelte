<script>
  import router from "page";
  import Home from "./Home.svelte";

  let page;
  let params;

  router("/", () => (page = Home));

  router.start();
</script>

<div id="center">
  <svelte:component this={page} {params} />
  <main />
</div>