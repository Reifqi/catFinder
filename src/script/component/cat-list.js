/* eslint-disable no-underscore-dangle */
import './cat-item';
class CatList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set cats(cats) {
    this._cats = cats;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.innerHTML += `
        <style>
            .placeholder{
                text-align: center;
                color: #D8D8D8;
            }
        </style>
        <h2 class="placeholder">${message} </h2>
        `;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        :host{
            display: block;
            box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 20px;
            margin: 1rem  7rem 2rem 7rem;
            text-align: justify;
            background-color: white;
            
        }
        </style>
        `;
    this._cats.forEach((cat) => {
      const catItemElement = document.createElement('cat-item');
      catItemElement.cat = cat;
      this.shadowDOM.appendChild(catItemElement);
    });
  }
}
customElements.define('cat-list', CatList);
