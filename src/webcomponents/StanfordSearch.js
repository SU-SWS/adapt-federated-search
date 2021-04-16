import ReactDOM from 'react-dom';
import Search from '../components/organisms/Search';

// See: https://reactjs.org/docs/web-components.html#using-react-in-your-web-components
class StanfordSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({mode: 'open'}).appendChild(mountPoint);
    const appId = this.getAttribute('appId');
    const apiKey = this.getAttribute('apiKey');
    const indexName = this.getAttribute('indexName');
    ReactDOM.render(<Search appId={appId} apiKey={apiKey} indexName={indexName} />, mountPoint);
  }
}

customElements.define('stanford-search', StanfordSearch);