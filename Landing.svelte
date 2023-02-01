<script>
  import LandingSubNav from "./LandingSubNav.svelte";

  import { select, selectAll } from "d3-selection";
  import { onMount } from "svelte";

  let activeTabValue;

  import {
    _tabSelect,
    _scaleDomain,
    _subnavitems,
    _subTabSelect
  } from "./tab-store.js";

  $: tabSelect = $_tabSelect;
  $: scaleDomain = $_scaleDomain;
  $: subnavitems = $_subnavitems;
  $: subTabSelect = $_subTabSelect;

  const handleClick = item => {
    select(".button." + item).style("background-color", "#2e1d97");
    selectAll(".button:not(." + item + ")").style("background-color", "#0e002c");

    subTabSelect == 1;
  };

  onMount(async () => {
    handleClick("peas");
  });

  const moveBack = () => () => {};
  const moveForward = () => () => {
    handleClick("lettuce");
  };
</script>

<nav id="navigation" />
<div id="aspects">
  <button
    class="button peas"
    on:click={() => {
      handleClick("peas");
      $_tabSelect = "peas";
      $_subTabSelect = 1;
      $_subnavitems = [
        {
          index: 0,
          label: "A",
          value: 1,
        },
        {
          index: 1,
          label: "B",
          value: 2,
        },
        {
          index: 2,
          label: "C",
          value: 3,
        },
        {
          index: 3,
          label: "D",
          value: 4,
        },
      ];
    }}>Peas</button
  >
  <button
    class="button lettuce"
    on:click={() => {
      handleClick("lettuce");
      $_tabSelect = "lettuce";
      $_subTabSelect = 1;
      $_subnavitems = [
        {
          index: 0,
          label: "1",
          value: 1,
        },
        {
          index: 1,
          label: "2",
          value: 2,
        },
        {
          index: 2,
          label: "3",
          value: 3,
        },
        {
          index: 3,
          label: "4",
          value: 4,
        },
        {
          index: 4,
          label: "5",
          value: 5,
        },
        {
          index: 5,
          label: "6",
          value: 6,
        },
      ];
    }}>Lettuce</button
  >
  <button
    class="button cauliflower"
    on:click={() => {
      handleClick("cauliflower");
      $_tabSelect = "cauliflower";
      $_subTabSelect = 1;
      $_subnavitems = [
        {
          index: 0,
          label: "a",
          value: 1,
        },
        {
          index: 1,
          label: "b",
          value: 2,
        },
        {
          index: 2,
          label: "c",
          value: 3,
        },
      ];
    }}>Cauliflower</button
  >
</div>
<nav>
  <slot activeTabValue={1} />
  <section class="tabs">
    <LandingSubNav {activeTabValue} />
  </section>
  <div id="pager">
    <div class="pager-prev" on:click={moveBack()}>◀</div>
    <div class="pager-next" on:click={moveForward()}>▶</div>
  </div>
</nav>

<style>
  #navigation {
    width: 100%;
  }
  #aspects {
    display: flex;
  }
  #aspects button {
    border-radius: 0;
    width: calc(33.3% - 1px);
    background-color: #0e002c;
    color: #fff;
    border-right: 1px solid #fff7f0;
  }
  #aspects button:hover {
    background-color: #2e1d97;
  }

  #pager {
    display: flex;
    cursor: pointer;
    font-size: 40px;
  }
  .pager-prev:hover,
  .pager-next:hover {
    color: #2e1d97;
  }
  .pager-next {
    padding-top: 6px;
    font-size: 42px;
  }
</style>
