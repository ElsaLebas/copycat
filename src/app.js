import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch/lite";
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';

;

const searchClient = algoliasearch(
  "ZH6901PX1J",
  "960f9fcf91cb1d368a9ab871cc9393a0"
);

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'sandbox_index_query_suggestions',
});

const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: 'navbar',
  limit: 3
});

autocomplete({
  container: "#autocomplete",
  openOnFocus: true,
  plugins: [querySuggestionsPlugin, recentSearchesPlugin],
  placeholder: "Your search here...",
  // openOnFocus: true,
  getSources() {
    return [
      {
        sourceId: "products",
        getItems({ query }) {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: "sandbox_index",
                query
              }
            ]
          });
        },
        getItemUrl({ item }) {
          return item.url;
        },
        templates: {
          item({ item }) {
            return item.name;
          }
        }
      }
    ];
  }
});
