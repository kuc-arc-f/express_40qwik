import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import {Head} from '../../components/Head';
import {Compo1} from './Compo1';
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
    const item  = {
      "userId": 0,
    }      
    const json = await CrudIndex.getList()
console.log(json);
    state.items = json;
//    const id = setTimeout(() => (state.items = dataItems)
//    , 100);
//    cleanup(() => clearTimeout(id));
  });
  //
  const increment = $(() => {
    console.log("increment="+ new Date().toString());
    count.value++
  });
  //
  // addProc
  const addProc = $(async() => {
//    console.log("increment="+ new Date().toString());
    await CrudIndex.addItem(); 
    location.reload();
  });
  //
  return (
  <>
    <div class="page_main_wrap container mx-auto my-2 px-8 bg-white">
      <Head />
      <h1 class="text-4xl font-bold">Test.tsx!</h1>
      <hr />
      <div class="card">
        <lavel>Title:
          <input type="text" id="title" class="input_text" />
        </lavel>
        <hr class="my-2" />
        {/* test */}
        <button type="button" class="ms-2 btn-purple"
          onClick$={addProc}
        >Add
        </button>
      </div>
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
    </div>
    <Compo1 params={111} />
    <style>{`
    .page_main_wrap{ min-height: 600px };
    `}</style>
  </>
  )
})
/*
<button onClick$={() => count.value++} class="btn-outline-purple"
>count is {count.value}</button>
*/