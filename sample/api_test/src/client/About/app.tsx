import { component$, useSignal } from '@builder.io/qwik'
import {Head} from '../../components/Head';
//import {Layout} from '../Layout';
//
export const App = component$(() => {
  const count = useSignal(0)
  //
  return (
  <>
    <Head />
    <div class="container mx-auto my-2 px-8 bg-white">
      
      <h1>About!!</h1>
      <div class="card">
        <button onClick$={() => count.value++}
        >[ count ] is {count.value}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </div>
  </>
  )
})
/*
<Head />
*/
