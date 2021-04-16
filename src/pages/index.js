import * as React from "react"
import Search from '../components/organisms/Search';
const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const apiKey = process.env.GATSBY_ALGOLIA_API_KEY;
const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

console.log('index', process.env.indexName);

// markup
const IndexPage = () => {
  return (
    <main className="font-sans">
      <title>Home Page</title>
      <div className="border-red-900 border-t-8"></div>
      <div className="container mx-auto">
        <div className="py-8">
          <h1 className="text-4xl font-semibold text-center mb-8 font-serif text-red-900">Algolia Federated Search Demo</h1>
        </div>
        <Search appId={appId} apiKey={apiKey} indexName={indexName} />
      </div>
    </main>
  )
}

export default IndexPage
