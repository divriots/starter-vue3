import { LitElement, html, css } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import logo from './vue.svg?raw';

export class VueLogo extends LitElement {
  static styles = css`
    svg {
      width: 4rem;
      height: 4rem;
      margin: 1rem 0;
    }
  `;

  render() {
    return html`${unsafeSVG(logo)}`;
  }
}

customElements.define('vue-logo', VueLogo);
