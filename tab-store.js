import { writable } from "svelte/store";

const domainList = [
  [0, 2000, 4000, 6000, 8000],
  [0, 200, 300, 400, 900],
  [0, 300, 500, 675, 1200],
  [0, 1300, 2000, 2500, 17000]
];

// export const _tabSelect = writable(selectList);
export const _tabSelect = writable("statewide");
export const _tabIndex = writable([0, 1, 2, 3]);
export const _scaleDomain = writable(domainList);

export const _subnavitems = writable([
  {
    index: 0,
    label: "A",
    value: 1
  },
  {
    index: 1,
    label: "B",
    value: 2
  },
  {
    index: 2,
    label: "C",
    value: 3
  },
  {
    index: 3,
    label: "D",
    value: 4
  }
]);
export const _subTabSelect = writable(1);
