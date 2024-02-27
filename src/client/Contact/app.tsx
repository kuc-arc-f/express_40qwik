import { component$, useSignal  } from '@builder.io/qwik'

//
export const App = component$(() => {
  const count = useSignal(0)
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>
        <a href="/">[ home ]</a>
        <hr />
      </div>
      <h1 class="text-4xl font-bold">Contact</h1>
      <hr class="my-2"/>
      <div class="card">
        <button onClick$={() => count.value++}
        >[ count ] is {count.value}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </div>
  )
})
