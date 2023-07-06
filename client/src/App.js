import "./App.css";
import "antd/dist/reset.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import FoodList from "./components/lists/FoodList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <FoodList/>
    </div>
  </ApolloProvider>
)

export default App;