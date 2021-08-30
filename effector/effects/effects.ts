import { createEffect } from "effector";

export const fetchData = createEffect(async () => {
    const data = await fetch(`https://mg-blog-api.herokuapp.com/api/blog`);
    const json = await data.json();
    return json;
});