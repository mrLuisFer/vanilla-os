import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('header-component')
export class HeaderComponent extends LitElement {
  render() {
    return html` <h1>Sopme title</h1> `
  }
}
