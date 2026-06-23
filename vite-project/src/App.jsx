import { Layout, Grid } from "./components";
import { ProductProvider } from "./context";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <Layout>
        <Grid />
      </Layout>
    </ProductProvider>
  );
}

export default App;
