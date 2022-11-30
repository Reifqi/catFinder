class CatItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set cat(cat) {
    this._cat = cat;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
             img{
                width: 100%;
                max-height: 400px;
                object-fit: cover;
                object-position: center;
                padding-top: 3rem;
                }
            </style>

            <img src="${this._cat.image_link}">
            <h2>${this._cat.name}</h2>
            <p>${this._cat.origin}</p>
            `;
  }
}
customElements.define("cat-item", CatItem);
