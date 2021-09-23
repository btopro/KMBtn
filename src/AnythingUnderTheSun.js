import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class AnythingUnderTheSun extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--anything-under-the-sun-text-color, #000);
      }

      a {
        border-radius: 30px;
        border-width: 1px;
        text-decoration: none;
        background-color: lightgrey;
        padding: 15px 25px 15px 25px;
        font-size: 20px;
        color: black;
        transition: 0.2s;
      }

      a:hover, a:focus {
        color: white;
        background-color: green;
        transition: 0.2s;
      }
    `;
  }

  static get properties() {
    return {
      link: { type: String },
      title: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.link = 'https://www.google.com/';
    this.title = 'Go to Google';
    this.icon = false;
  }

  __click(e) {
    if (this.editMode) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  render() {
    return html`
      <a href="${this.link}" @click=${this.__click} target="_blank" rel="noopener">
        ${this.icon ? html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>` : ``}
        ${this.title}
        <slot></slot>
      </a>
    `;
  }
}
