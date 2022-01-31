import { LitElement, html, css } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import logo from './logo.svg?raw';

export class DocLogo extends LitElement {
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

customElements.define('doc-logo', DocLogo);
