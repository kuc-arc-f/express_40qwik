/mport { component$, useSignal, useStore, useComputed$, useTask$, $ } from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';//

export const Layout = component$(() => {
  //
  return (
    <div class="container mx-auto my-2 px-8 bg-white">
      <div>Layout
      </div>
      <section>
          <Slot />
      </section>
    </div>
  )
})
/*
*/