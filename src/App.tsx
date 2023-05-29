import React from "react";
import { GlobalStyle } from "./modules/themes/globalStyle";
import { MainPage } from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./modules/components/Layout";
import { SearchResult } from "./pages/SearchResultPage";
import { ModalProvider } from "styled-react-modal";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Switch>
              <Route path="/movies" children={<MainPage />} />
              <Route path="/search" children={<SearchResult />} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
