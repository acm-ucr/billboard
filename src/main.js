// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

/* eslint-disable */
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://acmucr-billboard-api.herokuapp.com/graphql'
  }),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  apolloProvider,
  template: '<App/>',
  components: { App }
})
