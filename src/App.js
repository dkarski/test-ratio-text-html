import React from 'react';
import {Box, Container} from "./Container";

function App() {
  return (
    <>
      <Box lineHeight={[2, 2]} fontSize="18px">Hello World!</Box>
      <Container crossorigin={true} dad={false}>Hello World!</Container>
      </>
  );
}

export default App;
