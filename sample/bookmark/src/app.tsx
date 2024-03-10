import { component$, useSignal } from '@builder.io/qwik'
import {Head} from './components/Head';
//
export const App = component$(() => {
  const count = useSignal(0)

  return (
    <>
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold">Vite + Qwik</h1>
      <div class="card">
        <button onClick$={() => count.value++}
        >[ count ] is {count.value}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </>
  )
})
