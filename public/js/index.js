import Weather from './models/search';
import {elements} from './views/base';
import * as searchView from './views/searchView';

// /**  Global state of the app
//  *
//  *  - Search object
//  *
//  */

const state = {};

/**
 *
 *  Search Controller
 *
 */

const controlSearch = async () => {
  // 1) Get data from the user
  const query = searchView.getInput();

  if (query) {
    // 2) New search object and add to the state
    state.search = new Weather(query);

    // 3) Prepare UI for the results
    searchView.clearInput(); // inputfield
    searchView.clearData(); // datafield
    elements.inputField.blur();

    try {
      // 4) Search for results. Get the response from Api and await that response.
      await state.search.getWeather(); // getweather is aync and returns promise.

      if (state.search.data != null) {
        // If there is  data.
        // 5) Display/render results on UI.
        searchView.renderResults(state.search);
      }
    } catch (error) {
      alert(`Something is wrong...`);
    }
  }
};

// Clicking search button
elements.searchField.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
