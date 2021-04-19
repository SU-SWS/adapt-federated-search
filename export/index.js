import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../src/components/organisms/Search';
import '../src/styles/global.css';

const renderElement = document.getElementById('standalone-search');

const appId = renderElement.dataset.appId;
const apiKey = renderElement.dataset.apiKey;
const indexName = renderElement.dataset.indexName;

ReactDOM.render(<Search appId={appId} apiKey={apiKey} indexName={indexName} />, renderElement);