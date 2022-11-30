/* eslint-disable no-underscore-dangle */
class CatSearch extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .cat-search{
            box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
            padding: 0 0 1rem 12rem;
            margin: 1rem  7rem 2rem 7rem;
            background-color: white;
            border-radius: 10px;
        }
        
        .cat-search input{
            width: 70%;
            padding: 10px;
            margin-top: 1rem;
            border-radius: 10px;
            border-color: #562B08;
            text-align: center;
        }
        
        .cat-search button{
            height: fit-content;
            padding: 10px;
            background-color: #647E68;
            border-radius: 10px;
        }
        
        @media screen and (max-width: 1000px) {
            .cat-search {
                flex-direction: column;
                position: static;
                padding: 1rem;
              }
            
              .cat-search > input {
                width: 100%;
                margin-bottom: 12px;
                
              }
            
              .cat-search > button {
                width: 100%;
              }
            
          }
        </style>
        <div class="cat-search">
            <input placeholder="Search the cats" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

    this.shadowDOM
      .querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
  }
}
customElements.define('cat-search', CatSearch);
