import React from "react";
import { Container } from "@chakra-ui/react";
import { ContainerComponent } from "./ContainerComponent/ContainerComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Beer Listing App</title>
      </header>
      <Container>
        <ContainerComponent />
      </Container>
    </div>
  );
}

export default App;
