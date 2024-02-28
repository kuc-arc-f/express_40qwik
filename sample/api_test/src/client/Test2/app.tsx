//import { component$, useSignal } from '@builder.io/qwik'
import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import CrudIndex from './CrudIndex';
//
const dataItems = [
  {id:1 , title: "title_1"},
  {id:2 , title: "title_2"},
  {id:3 , title: "title_3"},
];
//
export const App = component$(() => {
  const text = useSignal('qwik');
  const state = useStore({ count: 0, items: [] });
  const count = useSignal(0)
  const time = useSignal('paused');

  //init
  useTask$(async({ track, cleanup }) => {
    const value = track(() => text.value);
    const id = setTimeout(() => (state.items = dataItems)
    , 100);
    const items = await CrudIndex.getList();
    state.items = items;
console.log(items);
    cleanup(() => clearTimeout(id));
  });
  //
  const increment = $(() => {
    console.log("increment="+ new Date().toString());
    count.value++
  });
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
        <a href="/">[ home ]</a>
        <hr />
      </div>
      <h1 class="text-4xl font-bold">Test2!!!</h1>
      <hr />
      <div class="card">
        <lavel>Title:
          <input type="text" id="title" class="input_text" />
        </lavel>
        <hr class="my-2" />
        <button onClick$={() => count.value++} class="btn-outline-purple"
        >count is {count.value}</button>
        <button onClick$={increment} class="ms-2 btn-outline-purple"
        >count2 is {count.value}</button>
        {/* add */}
        <button onClick$={() => {
            const target =state.items;
console.log("#btn" + new Date().toString() + ",Len=" +target.length);
            const title = document.querySelector("#title");
            let titleValue = "";
            //@ts-ignore
            if(title){ titleValue = title.value }
            const addId = target.length + 1;
            target.push({id: addId, title: titleValue});
            //@ts-ignore
            title.value = "";
        }}
        class="ms-2 btn">Add</button>
        {/*
        */}
        {/* test */}
        <button type="button" class="ms-2 btn-outline-purple"
          onClick$={() => {
            console.log("#btn" + new Date().toString())
          }}
        >Test2
        </button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
      <hr class="my-2" />
      {state.items.map((item: any) => {
        return (
        <div key={item.id}>
          <h3 class="text-3xl font-bold">title= {item.title}</h3>
          <span>id: {item.id}</span>
          <hr class="my-2" />
        </div>
        );
      })}
      <div>{time}</div>
    </div>
  )
})
/*
<p>Count: {state.count}</p>
*/