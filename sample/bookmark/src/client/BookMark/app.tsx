import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import CrudIndex from './CrudIndex';
import {Head} from '../../components/Head';
//
export const App = component$(() => {
  const text = useSignal('qwik');
  const state = useStore({ count: 0, items: [] });
  const count = useSignal(0)
  const time = useSignal('paused');

  //init
  useTask$(async({ track, cleanup }) => {
    const items = await CrudIndex.getList();
    state.items = items;
console.log(items);
  });
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
      <h1 class="text-4xl font-bold">BookMark</h1>
      <hr />
      <div class="card">
        <lavel>Title:
          <input type="text" id="title" class="input_text" />
        </lavel>
        <div class="mb-2">
          <label class="text-2xl block text-gray-700 font-bold mb-2">URL</label>
          <input type="text" id="url" 
          class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="ex: https://url-input-123456789.com"
          />
        </div>
        <hr class="my-2" />
        <button onClick$={addProc} class="ms-2 btn-purple"
        >Add</button>
        {/* test */}
      </div>
      <hr class="my-2" />
      {state.items.map((item: any) => {
        return (
        <div key={item.id}>
          <a href={`${item.url}`} target="_blank">
            <h3 class="text-3xl font-bold">{item.title}</h3>
          </a>
          <span>id: {item.id}</span>
          <a href={`/bookmark/show?id=${item.id}`}>
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