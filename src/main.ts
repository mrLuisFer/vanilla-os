import './scss/index.scss'
import './ts'

import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const app: HTMLDivElement | HTMLElement =
  document.querySelector<HTMLDivElement>('#app')!
console.log(app)

@customElement('my-app')
export class MyApp extends LitElement {
  @property()
  name: string = 'Luis'

  render() {
    return html`
      <div>
        <h1>Un lit element</h1>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp
  }
}
