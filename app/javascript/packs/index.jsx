// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// entry component of react app. this renders the App component that has all the frontend routes

import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import { ApolloProvider } from 'react-apollo';
import { createCache, createClient } from '../utils/apollo';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ApolloProvider client={createClient(createCache())}>
      <App />
    </ApolloProvider>,
    document.body.appendChild(document.createElement('div'))
  );
})
