import { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
//import {Head} from '../../components/Head';
//import {Compo1} from './Compo1';
import HttpCommon from '../lib/HttpCommon';
import CrudIndex from './CrudIndex';

//
let pageItems: any[] = [];
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
    /*
    const value = track(() => text.value);
    const id = setTimeout(() => (state.items = dataItems)
    , 100);
    cleanup(() => clearTimeout(id));
    */
    const btn_search = document.querySelector('#btn_search');
    btn_search?.addEventListener('click', async () => {
        const post_list_wrap = document.querySelector(`.post_list_wrap`) as HTMLInputElement;
        if (!post_list_wrap.classList.contains('d-none')) {
            post_list_wrap?.classList.add('d-none');
        }
        const res = await CrudIndex.search();
        state.items = res;
//        setUpdatetime(new Date().toString());
      console.log(res);
    });

  });
  //
  return (
  <>
    <div class="search_result_wrap container mx-auto my-2 px-2">
      <hr class="my-2" />
      {state.items.map((item: any) => {
        return (
        <div key={item.id} class="rounded-md bg-white my-2  p-4">
          <div class="flex flex-row">
            <div class="flex-1 p-2 m-1">
              <a href={`/posts/${item.id}`} target="_blank"><h3 class="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>ID: {item.id}, {item.createdAt}</p>
            </div>
            <div class="flex-1 p-2 m-1 text-end">
              <a href={`/posts/${item.id}`} target="_blank">
                <button  class="btn-outline-purple ms-2 my-2">Show</button>
              </a>
            </div>
          </div>
        </div>
        );
      })}
    </div>
  </>
  )
})
/*
<div>{time}</div>
*/