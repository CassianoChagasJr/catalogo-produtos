import { Layout, Grid, SearchBar } from "./components";
import { ProductProvider } from "./context";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <Layout>
        <SearchBar />
        <Grid />
      </Layout>
    </ProductProvider>
  );
}

export default App;
