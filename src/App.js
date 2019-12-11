import React from "react";
import Container from "./Container";
import ErrorBoundary from "./Components/ErrorBoundary";

function App(props) {
  return (
    <>
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
    </>
  );
}

export default App;
