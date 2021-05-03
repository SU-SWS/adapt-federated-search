import React from 'react'

const SearchResultCard = ({hit}) => {
  return (
    <div className='border-b border-gray-400 mb-8 pb-8 text-lg'>
      <div className='text-sm text-green-900 font-semibold inline-block'>{hit.hostname}</div>
      <h2 className='text-2xl font-serif font-semibold text-red-900 hover:underline mb-2'><a href={hit.url} target='__blank'>{hit.title}</a></h2>
      <div class="flex">
        {hit.image && 
          <div className="mr-8"><img src={hit.image} alt={'Preview image for ' + hit.title} className="h-32 object-cover object-center" /></div> 
        }
        <div className='mt-2'>{hit.description}</div>
      </div>
    </div>
  )
}

export default SearchResultCard