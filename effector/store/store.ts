import { createStore } from "effector";
import { fetchData } from "../effects/effects";


export const dataStore = createStore([])
.on(fetchData.doneData, (list, data) => {
  return data;
});

fetchData();


dataStore.watch(value => console.log(value))