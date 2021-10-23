import './scss/index.scss'
import './ts'

import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const app: HTMLDivElement | HTMLElement =
  document.querySelector<HTMLDivElement>('#app')!
console.log(app)

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ]

  @property() name = 'World'

  render() {
    return html`<h1>Hello, ${this.name}</h1>`
  }
}
