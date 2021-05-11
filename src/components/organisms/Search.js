import React from 'react'
import { InstantSearch, SearchBox, Hits, RefinementList, Pagination, Configure, Stats} from 'react-instantsearch-dom'
import SearchResultCard from '../cards/SearchResultCard'
import algoliasearch from 'algoliasearch'

const Search = ({appId, apiKey, indexName}) => {
  const searchClient = algoliasearch(appId, apiKey);
  const redirectIndex = searchClient.initIndex('custom_redirects');

  const submitHandler = (event) => {
    event.preventDefault();
    // Redirect users for exact search phrases defined in custom_redirects index.
    const searchPhrase = event.target[0].value;
    redirectIndex.search('', {
      filters: `searchPhrase:"${searchPhrase}"`
    })
    .then(({hits}) => {
      if (hits.length && hits[0]['redirectURL']) {
        window.location.href = hits[0]['redirectURL'];
      }
    })
  }
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={indexName} >
        <Configure
          hitsPerPage={5}
        />
        <div className='flex'>
          <div className='w-96 flex-shrink-0'>
            <div className="font-semibold">Website</div>
            <RefinementList attribute='hostname' />
          </div>
          <div>
            <div className="mb-8">
              <SearchBox onSubmit={submitHandler} />
              <Stats />
            </div>
            <Hits hitComponent={SearchResultCard} />
            <Pagination />
          </div>
          
        </div>
      </InstantSearch>
    </div>
  )
}

export default Search;