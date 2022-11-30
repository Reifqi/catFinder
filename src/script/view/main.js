import "../component/cat-search";
import DataSource from "../data/data-source.js";
import "../component/cat-list.js";


const main = () => {
  const searchElement = document.querySelector("cat-search");
  const catListElement = document.querySelector("cat-list");



  const onButtonSearchClicked = () => {
    DataSource.searchCat(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    catListElement.cats = results;
  };

  const fallbackResult = (message) => {
    catListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
