import {
  createDomain,
  createEvent,
  createStore,
  sample,
  createEffect,
} from "effector";



export const fetchData = createEffect(async () => {
  const data = await fetch(`https://mg-blog-api.herokuapp.com/api/blog`);
  const json = await data.json();
  return json;
});
export const newPost = createEvent()

export const dataStore = createStore([])
.on(fetchData.doneData, (list, data: any) => {
  return data;
})
.on(newPost, (state, post) => [
  ...state,
  post,
])

fetchData()