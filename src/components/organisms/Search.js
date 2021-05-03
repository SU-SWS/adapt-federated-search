import React from 'react'
import { InstantSearch, SearchBox, Hits, RefinementList, Pagination, Configure, Stats} from 'react-instantsearch-dom'
import SearchResultCard from '../cards/SearchResultCard'
import algoliasearch from 'algoliasearch'
const Search = ({appId, apiKey, indexName}) => {
  const searchClient = algoliasearch(appId, apiKey)
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
              <SearchBox />
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