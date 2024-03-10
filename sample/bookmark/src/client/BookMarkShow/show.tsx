import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import CrudIndex from './CrudIndex';
import CrudShow from './CrudShow';
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
  const state = useStore({ count: 0, items: [], item: {}, id: 0});
  const count = useSignal(0)
  const time = useSignal('paused');

  //init
  useTask$(async({ cleanup }) => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id') || "";
console.log("id=", id);
    state.id = Number(id);
    const timerId = setTimeout(async () => {
      const item = await CrudShow.get(state.id);
console.log(item);
      state.item = item;
    }
    , 500);
//console.log(items);
    cleanup(() => clearTimeout(timerId));
  });
  //
  const deleteProc = $(async() => {
    if(!state.item.id){
      return;
    }
    console.log(state.item.id);
    const timerId = setTimeout(async() => {
      const result = await CrudShow.delete(state.item.id);
      if(result) {
        //console.log("#delete.OK");
          location.href = '/bookmark';
        }
    }, 500);
  });
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold my-2">BookMarkShow!</h1>
      <hr class="my-2" />
      <h1 class="text-4xl font-bold">{state.item.title}</h1>
      <hr class="my-2" />
      <p>{state.item.url}</p>
      <hr class="my-2" />
      <p>id: {state.item.id}, {state.item.createdAt}</p>
      <hr class="my-2" />
      <div class="card">
        <button onClick$={deleteProc} class="ms-2 btn-red"
        >Delete</button>
      </div>
      <hr class="my-2" />
    </div>
  )
})
/*
*/