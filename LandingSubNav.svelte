<script>
  import { _tabSelect, _subnavitems, _subTabSelect } from "./tab-store";

  export let activeTabValue = 1;

  const handleClick = tabValue => () => {
    activeTabValue = tabValue;
  };

  $: tabSelect = $_tabSelect;
  $: subTabSelect = $_subTabSelect;

  if ($_subTabSelect == 1) {
    activeTabValue == 1;
    handleClick("1");
  }

   $: {
    tabSelect;
    activeTabValue = 1;
  }
</script>

<ul>
  {#each $_subnavitems as item}
    <li
      class={activeTabValue === item.value
        ? "active " + $_tabSelect
        : " " + $_tabSelect}
    >
      <span on:click={handleClick(item.value)}>{item.label}</span>
    </li>
  {/each}
</ul>
{#each $_subnavitems as item}
  {#if activeTabValue == item.value}
    <div id="subnav">
      <div class="box i{item.value}" />
    </div>
  {/if}
{/each}

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 0px;
  }
  li {
    margin-bottom: -1px;
  }
  li.statewide {
    width: calc(25% - 1px);
  }
  li.facilities {
    width: calc(33.3% - 1px);
  }
  li.local span {
    padding: 0.5rem 1.27rem;
  }

  span {
    border: 1px solid transparent;
    border-radius: 4px;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border-right: 1px solid #fff7f0;
    margin-right: 5px;
  }

  span:hover {
    border-color: #2e1d97 #2e1d97 #fff7f0;
  }

  li.active > span {
    background-color: #2e1d97;
    color: #fff;
    border-color: #2e1d97;
  }

  @media all and (max-width: 900px) {
    ul {
      margin-top: 0px;
    }
    li {
      margin-top: 10px;
    }
  }
</style>
