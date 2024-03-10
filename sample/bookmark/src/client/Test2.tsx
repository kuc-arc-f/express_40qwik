import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import { App } from './Test2/app'
//
render(document.getElementById('app') as HTMLElement, <App />)
