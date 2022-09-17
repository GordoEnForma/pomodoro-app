import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {ChakraProvider} from '@chakra-ui/react';
import { TimeProvider } from "./context/TimeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <TimeProvider>
        <App />
      </TimeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
