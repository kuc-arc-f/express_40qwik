import { component$, useSignal } from '@builder.io/qwik'

//
export const App = component$(() => {
  const count = useSignal(0)
  //
  return (
    <>
      <div>
        <a href="/">[ home ]</a>
        <hr />
      </div>
      <h1>Contact</h1>
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
