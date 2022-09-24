import Layout from "./components/Layout";

import { GlobalStyle } from "./styles/global";

import { ContextProvider } from "./context";
import { DataProvider } from "./context/data";

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
