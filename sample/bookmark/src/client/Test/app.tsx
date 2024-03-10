import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import {Head} from '../../components/Head';
import {Compo1} from './Compo1';
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
  useTask$(({ track, cleanup }) => {
    const value = track(() => text.value);
    const id = setTimeout(() => (state.items = dataItems)
    , 100);
    cleanup(() => clearTimeout(id));
  });
  //
  const increment = $(() => {
    console.log("increment="+ new Date().toString());
    count.value++
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
<div>{time}</div>
*/