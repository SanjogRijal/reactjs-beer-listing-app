import React from "react";
import { Container } from "@chakra-ui/react";
import { ContainerComponent } from "./ContainerComponent/ContainerComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Beer Listing App</title>
      </header>

      <body>
        <Container>
          <ContainerComponent />
        </Container>
      </body>
    </div>
  );
}

export default App;
