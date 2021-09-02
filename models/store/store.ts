import {
  createDomain,
  createEvent,
  createStore,
  sample,
  createEffect,
  guard,
  restore,
} from "effector";
import { IPost } from "../../interfaces";



export const fetchDataFx = createEffect(async (url) => {
  const data = await fetch(url);
  return data.json();
});
export const postCreated = createEvent<IPost>()

// export const dataStore = createStore<IPost[]>([])
// .on(fetchData.doneData, (list, data: IPost[]) => {
//   return data;
// })
export const $dataStore = restore(fetchDataFx, []).on(postCreated, (state, post) => [
  ...state,
  post,
]);

fetchDataFx(`https://mg-blog-api.herokuapp.com/api/blog`);