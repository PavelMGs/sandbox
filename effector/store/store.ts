import { createStore } from "effector";
import { fetchData } from "../effects/effects";
import { newPost } from "../events/events";


export const dataStore = createStore([])
.on(fetchData.doneData, (list, data) => {
  return data;
})
.on(newPost, (state, post) => [
  ...state,
  post,
])

fetchData();


dataStore.watch(value => console.log(value))