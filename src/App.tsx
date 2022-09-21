import Layout from "./components/Layout";
import { ContextProvider } from "./context";
import { DataProvider } from "./context/data";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <DataProvider>
          <Layout />
        </DataProvider>
      </ContextProvider>
    </>
  );
}

export default App;
