import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://giving-dove-47.hasura.app/v1/graphql',
    headers: {
      'hasura-collaborator-token': 'IDToken eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzoyMzIyM2JiNi1lODQ3LTRhMTAtOThhNS02Yzk1YjZlYWUxOGEiLCJ0eXAiOiJKV1QifQ.eyJhbGxvd2VkX3NjaGVtYXMiOltdLCJhbGxvd2VkX3RhYmxlcyI6e30sImF0X2hhc2giOiJRdzlkYURYcjNMZE1SN19rcmZVU25BIiwiYXVkIjpbIjIwNzRjMTJkLTAxNzQtNDAwZi04M2IyLTRkNDlhZWRiMDMwOF9jb25zb2xlIl0sImF1dGhfdGltZSI6MTU5MzUzMzAyMSwiY29sbGFib3JhdG9yX3ByaXZpbGVnZXMiOlsiYWRtaW4iLCJncmFwaHFsX2FkbWluIiwidmlld19tZXRyaWNzIl0sImV4cCI6MTU5MzUzNjYyOCwiaWF0IjoxNTkzNTMzMDI4LCJpc3MiOiJodHRwczovL29hdXRoLnByby5oYXN1cmEuaW8vIiwianRpIjoiMjFjMzI2NjItNDY5NS00M2Y0LTg0OGMtOGJlZDZiYzBhMDZmIiwibWV0cmljc19mcWRuIjoidXMtZWFzdC0yLWF3cy1tZXRyaWNzLWNsb3VkLmhhc3VyYS1hcHAuaW8iLCJub25jZSI6IiIsInByb2plY3QiOnsiaWQiOiI4ZDUwODBkYy1hOWY4LTQ5NzQtOTFhYy02ZmRjNGNmNWQ5MDYiLCJuYW1lIjoiZ2l2aW5nLWRvdmUtNDcifSwicmF0IjoxNTkzNTMzMDE4LCJzaWQiOiIxNDYwNDg2Ni03MTlhLTQ3ZTUtYjAxZC0zOTQ1MTM4NzVmYjMiLCJzdWIiOiI0ZDU0ODc2ZS01MmVkLTQyMTgtYjc5Ny0zOGZkM2VhOWZlMDQifQ.t1vKeZB2-XWgKTYG64CaEx3UhfWRA0fU5lXn6d86ED4ul3ATfZoqMk-HAB_4p88UUEYPvLiPc32DFNcC3lxb7BgTeeow8YoObdNyohs9MwrOUq4JrhadETxHXJcDHr1BLerTOpy-bF9OBjk6IZlZRmgtSYtjojEN3JGAEiU0Wq9rkZw8sBw4cXEssrF--tdDGIFpiHKvj2Y8Oztd0jLpuwaRZd-R1R9oF36RrhjtXjFupd4LG0CWxTefec_gP8I-ECRNUaB_w2GRfNT_L8h69YgmYutqaoA0P1CJYpblvWVenk24-AjUpc8lcjmMRmC7ijttek-a-pvsIrhTnE1lTENtwxGs5i7xEA5wvSNdwdQ1FPumgkGGJTAneVg0vs1TmTcCTY3gysETtf4djchj9WRn93WXHzK8OBNMuJqcBtJrQSC6KZzo9zsDadd7r9HutNkT3ecl_J1eJeN6cVanF5xsMJdOxJIZtWbVsOHnwvfZfmhBlMRSKJEkmjioNFyToU9wZilGPrZxvCebul68y9vdzEWSjDxONcheO6xo2HBwjdFQI7EuAADmfFSiBUy9dBdS4XQV9XgDwWd-xwaoaXdl_9doUZKRMsrIiCmw6sK_ukgDoVYBFfaHZsWq2hv0EBsbrQ0zBUmliPhTnOZDtwZoL2Wyxwj1WbUwvMs79GI',
    }
  })
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
