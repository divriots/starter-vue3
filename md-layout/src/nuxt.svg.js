import { LitElement, html, css } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import logo from './nuxt.svg?raw';

export class NuxtLogo extends LitElement {
  static styles = css`
    svg {
      width: 5rem;
      height: 5rem;
      margin: 0.5rem 0;
    }
  `;

  render() {
    return html`${unsafeSVG(logo)}`;
  }
}

customElements.define('nuxt-logo', NuxtLogo);
