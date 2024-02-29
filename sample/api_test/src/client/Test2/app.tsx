import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import CrudIndex from './CrudIndex';
import {Head} from '../../components/Head';
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
  /*
  const increment = $(() => {
    console.log("increment="+ new Date().toString());
    count.value++
  });
  */
  const addProc = $(async() => {
//    console.log("increment="+ new Date().toString());
    await CrudIndex.addItem(); 
    location.reload();
  });
  //
  return (
  <div>
    <div class="container mx-auto my-2 px-8 bg-white">
      <Head />
      <h1 class="text-4xl font-bold">Test2!!!</h1>
      <hr />
      <div class="card">
        <lavel>Title:
          <input type="text" id="title" class="input_text" />
        </lavel>
        <hr class="my-2" />
        <button onClick$={addProc} class="ms-2 btn-purple"
        >AddItem</button>
        <button onClick$={() => count.value++} class="ms-2 btn-outline-purple"
        >count is {count.value}</button>
        {/* test */}
      </div>
      <hr class="my-2" />
      {state.items.map((item: any) => {
        return (
        <div key={item.id}>
          <h3 class="text-3xl font-bold">title= {item.title}</h3>
          <span>id: {item.id}</span>
          <a href={`/test_api/show?id=${item.id}`}>
          <button className="btn-outline-purple ms-2">Show</button>
          </a>
          <hr class="my-2" />
        </div>
        );
      })}
      <div>{time}</div>
    </div>
  </div>
  )
})
/*
<a href="/">[ home ]</a>
<hr />
<button type="button" class="ms-2 btn-outline-purple"
onClick$={() => {
  console.log("#btn" + new Date().toString())
}}
>Test2
</button>
*/